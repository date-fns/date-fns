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
const getConstants = require('../_lib/getConstants')

const outdatedLocales = require('../../outdatedLocales.json')

const generatedAutomaticallyMessage =
  "// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it."

const fns = listFns()
const fpFns = listFPFns()
const locales = listLocales().filter(
  ({ code }) => !outdatedLocales.includes(code)
)
const constants = getConstants()

writeFile('src/index.js', generateIndex(fns, false, constants))
writeFile('src/fp/index.js', generateIndex(fpFns, true, constants))
writeFile('src/locale/index.js', generateIndex(locales, false))
writeFile('src/esm/index.js', generateESMIndex(fns, false, true))
writeFile('src/esm/fp/index.js', generateESMIndex(fpFns, true, true))
writeFile('src/esm/locale/index.js', generateESMIndex(locales, false, false))

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content)
  )
}

function generateIndex(files, isFP, constants) {
  const propertyRequireLines = files.map(
    fn => `${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`
  )
  const constantsExportLines = constants
    ? constants.map(c => `${c.name}: constants.${c.name}`)
    : []

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(
      constants
        ? [
            `var constants = require('${
              isFP ? '..' : '.'
            }/constants/index.js')`,
            ''
          ]
        : []
    )
    .concat('module.exports = {')
    .concat(propertyRequireLines.concat(constantsExportLines).join(',\n'))
    .concat('}')
    .join('\n')

  return `${indexLines}\n`
}

function generateESMIndex(files, isFP, includeConstants) {
  const fileLines = files
    .map(
      fn =>
        `export { default as ${fn.name} } from '${fn.path.replace(
          /\.js$/,
          ''
        )}/index.js'`
    )
    .concat(
      includeConstants
        ? `export * from '${isFP ? '..' : '.'}/constants/index.js'`
        : []
    )

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}
