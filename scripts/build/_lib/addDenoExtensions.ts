import { existsSync } from 'fs'
import { readFile, stat, writeFile } from 'fs/promises'
import globby from 'globby'
import { dirname, resolve } from 'path'
import ts, {
  ExportDeclaration,
  ImportDeclaration,
  StringLiteral,
} from 'typescript'

// *.ts and *.js, but NOT *.d.ts files
const pattern = /(?<!\.d)\.(ts|js)$/

const resolvedExtensions: Record<string, string> = {}

globby('deno')
  .then((files) => files.filter((file) => pattern.test(file)))
  .then((files) =>
    Promise.all(
      files.map((file) =>
        readFile(file, 'utf8').then(async (content) => {
          const source = ts.createSourceFile(
            file,
            content,
            ts.ScriptTarget.Latest
          )
          const imports: string[] = []

          source.forEachChild((node) => {
            if (
              [
                ts.SyntaxKind.ImportDeclaration,
                ts.SyntaxKind.ExportDeclaration,
              ].includes(node.kind)
            ) {
              const importNode = node as ImportDeclaration | ExportDeclaration
              const specifier = importNode.moduleSpecifier as StringLiteral
              const importPath = specifier.text
              const isLocal = /\.\/.+/
              if (isLocal) imports.push(importPath)
            }
          })

          await Promise.all(
            imports.map(async (importPath) => {
              const fullPath = resolveFullPath(file, importPath)

              if (resolvedExtensions[fullPath]) return

              // identify directory imports that should resolve to their index file in Deno
              let isDirectory = false
              if (existsSync(fullPath)) {
                const st = await stat(fullPath)
                isDirectory = st.isDirectory()
              }

              const suffixes = isDirectory
                ? ['/index.ts', '/index.js']
                : ['.ts', '.js']

              for (const suffix of suffixes) {
                if (existsSync(fullPath + suffix)) {
                  resolvedExtensions[fullPath] = suffix
                  break
                }
              }

              if (!resolvedExtensions[fullPath]) {
                console.error("Can't locate import path:", fullPath)
                console.error('In file:', file)
                process.exit(1)
              }
            })
          )

          return writeFile(
            file,
            imports.reduce((acc, importPath) => {
              const fullPath = resolveFullPath(file, importPath)

              // only replace when path is surrounded by single or double quotes
              return acc.replace(
                new RegExp('(?<=\'|")' + importPath + '(?=\'|")', 'g'),
                importPath + resolvedExtensions[fullPath]
              )
            }, content)
          )
        })
      )
    )
  )

function resolveFullPath(file: string, importPath: string) {
  return resolve(dirname(file), importPath)
}
