#!/usr/bin/env yarn tsx

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

import { writeFile, readFile } from 'fs/promises'
import { listFns } from '../_lib/listFns'
import { listFPFns } from '../_lib/listFPFns'
import { listLocales } from '../_lib/listLocales'

interface File {
  name: string
  path: string
  fullPath: string
}

;(async () => {
  const locales = await listLocales()
  const fns = await listFns()
  const fpFns = await listFPFns()

  await Promise.all([
    generatePackageJSON({ fns, fpFns, locales }).then((json) =>
      writeFile('package.json', json)
    ),

    writeFile(
      'src/index.ts',
      generateIndex({ files: fns, includeConstants: true })
    ),

    writeFile(
      'src/fp/index.ts',
      generateIndex({ files: fpFns, isFP: true, includeConstants: true })
    ),

    writeFile('src/locale/index.ts', generateIndex({ files: locales })),

    writeFile('typedoc.json', generateTypeDoc(fns)),
  ])
})()

interface GeneratePackageJSONProps {
  fns: File[]
  fpFns: File[]
  locales: File[]
}

async function generatePackageJSON({
  fns,
  fpFns,
  locales,
}: GeneratePackageJSONProps) {
  const packageJSON = JSON.parse(await readFile('package.json', 'utf-8'))
  packageJSON.exports = Object.fromEntries(
    [['.', { require: './index.js', import: './index.mjs' }]]
      .concat(mapExports(['./constants', './locale', './fp'], '.'))
      .concat(mapExports(mapFiles(fns)))
      .concat(mapExports(mapFiles(fpFns), './fp'))
      .concat(mapExports(mapFiles(locales), './locale'))
  )
  return JSON.stringify(packageJSON, null, 2)
}

function mapFiles(files: File[]) {
  return files.map((file) => file.path)
}

function mapExports(paths: string[], prefix = '.') {
  return paths.map((path) => {
    const pth = `${prefix}${path.slice(1)}`
    return [pth, { require: `${pth}.js`, import: `${pth}.mjs` }]
  })
}

interface GenerateIndexProps {
  files: File[]
  isFP?: boolean
  includeConstants?: boolean
}

function generateIndex({
  files,
  isFP,
  includeConstants,
}: GenerateIndexProps): string {
  const lines = files.map(
    (file) => `export { default as ${file.name} } from '${file.path}/index'`
  )

  if (includeConstants)
    lines.push(`export * from '${isFP ? '..' : '.'}/constants/index'`)

  // Add types export
  lines.push(`export * from '${isFP ? '..' : '.'}/types'`)

  return `// This file is generated automatically by \`scripts/build/indices.ts\`. Please, don't change it.

${lines.join('\n')}
`
}

function generateTypeDoc(fns: Awaited<ReturnType<typeof listFns>>) {
  return (
    "// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.\n" +
    JSON.stringify(
      {
        name: 'date-fns',
        entryPoints: fns
          .map((fn) => fn.fullPath)
          .concat('./src/constants/index.ts'),
        json: './tmp/docs.json',
        plugin: ['typedoc-plugin-missing-exports'],
      },
      null,
      2
    )
  )
}
