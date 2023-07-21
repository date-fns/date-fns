#!/usr/bin/env yarn ts-node

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

import { writeFile } from 'fs/promises'
import listFns from '../_lib/listFns'
import listFPFns from '../_lib/listFPFns'
import listLocales from '../_lib/listLocales'

interface File {
  name: string
  path: string
  fullPath: string
}

;(async () => {
  const locales = await listLocales()

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
