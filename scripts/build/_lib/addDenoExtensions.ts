import { resolve, dirname } from 'path'
import fs from 'fs'
import globby from 'globby'
import ts, {
  ExportDeclaration,
  ImportDeclaration,
  StringLiteral,
} from 'typescript'

const { readFile, writeFile, stat } = fs.promises

const pattern = /\.(ts|js)$/
const ignore = [/\.d\.ts$/]

const resolvedExtensions: Record<string, string> = {}

globby('deno')
  .then((files) =>
    files.filter(
      (file) => pattern.test(file) && !ignore.find((p) => p.test(file))
    )
  )
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
              if (resolvedExtensions[importPath]) return
              const fullPath = resolveFullPath(file, importPath)
              let isTs = false
              try {
                await stat(fullPath + '.ts')
                isTs = true
              } catch (_) {}
              resolvedExtensions[fullPath] = isTs ? '.ts' : '.js'
            })
          )

          return writeFile(
            file,
            imports.reduce((acc, importPath) => {
              const fullPath = resolveFullPath(file, importPath)
              return acc.replace(
                new RegExp(importPath, 'g'),
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
