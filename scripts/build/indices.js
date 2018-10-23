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

const fns = listFns()
const fpFns = listFPFns()
const locales = listLocales().filter(
  ({ code }) => !outdatedLocales.includes(code)
)

writeFile('src/index.js', generateIndex(fns))
writeFile('src/fp/index.js', generateIndex(fpFns))
writeFile('src/locale/index.js', generateIndex(locales))
writeFile('src/esm/index.js', generateESMIndex(fns))
writeFile('src/esm/fp/index.js', generateESMIndex(fpFns))
writeFile('src/esm/locale/index.js', generateESMIndex(locales))

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content)
  )
}

function generateIndex(files) {
  const propertyRequireLines = files.map(
    fn => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`
  )

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat('module.exports = {')
    .concat(propertyRequireLines.join(',\n'))
    .concat('}')
    .join('\n')

  return `${indexLines}\n`
}

function generateESMIndex(files) {
  const fileLines = files.map(
    fn =>
      `export { default as ${fn.name} } from '${fn.path.replace(
        /\.js$/,
        ''
      )}/index.js'`
  )

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}
