#!/usr/bin/env node

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

const fs = require('fs')
const path = require('path')
const prettier = require('./_lib/prettier')
const listFns = require('../_lib/listFns')
const listFPFns = require('../_lib/listFPFns')
const listLocales = require('../_lib/listLocales')

const outdatedLocales = require('../../outdatedLocales.json')

const generatedAutomaticallyMessage =
  "// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it."

listFns().then((fns) => {
  const fpFns = listFPFns()
  const locales = listLocales().filter(
    ({ code }) => !outdatedLocales.includes(code)
  )

  writeFile('src/index.js', generateIndex(fns, false, true))
  writeFile('src/fp/index.js', generateIndex(fpFns, true, true))
  writeFile('src/locale/index.js', generateIndex(locales, false, false))
})

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content)
  )
}

function generateIndex(files, isFP, includeConstants) {
  const fileLines = files
    .map(
      (fn) =>
        `export { default as ${fn.name} } from '${fn.path.replace(
          /\.js$/,
          ''
        )}/index'`
    )
    .concat(
      includeConstants
        ? `export * from '${isFP ? '..' : '.'}/constants/index'`
        : []
    )

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}
