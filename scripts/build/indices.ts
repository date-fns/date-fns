#!/usr/bin/env ts-node

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

import { readFile, writeFile } from 'fs/promises'
import listFns from '../_lib/listFns'
import listFPFns from '../_lib/listFPFns'
import listLocales from '../_lib/listLocales'

interface File {
  name: string
  path: string
  fullPath: string
}

;(async () => {
  const outdatedLocales: string[] = JSON.parse(
    (await readFile('./outdatedLocales.json')).toString()
  )

  const locales = (await listLocales()).filter(
    ({ code }) => !outdatedLocales.includes(code)
  )

  const fns = await listFns()
  const fpFns = listFPFns()

  writeFile('src/index.ts', generateIndex(fns, false, true))
  writeFile('src/fp/index.ts', generateIndex(fpFns, true, true))
  writeFile('src/locale/index.ts', generateIndex(locales, false, false))
})()

function generateIndex(
  files: File[],
  isFP: boolean,
  includeConstants: boolean
): string {
  const lines = files.map(
    (file) => `export { default as ${file.name} } from '${file.path}/index'`
  )

  if (includeConstants)
    lines.push(`export * from '${isFP ? '..' : '.'}/constants/index'`)

  return `// This file is generated automatically by \`scripts/build/indices.ts\`. Please, don't change it.

${lines.join('\n')}
`
}
