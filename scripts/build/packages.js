#!/usr/bin/env node

/**
 * @file
 * The script generates package.json files that points to correct ESM modules.
 *
 * It's a part of the build process.
 */

const fsp = require('fs-promise')
const path = require('path')
const listFns = require('../_lib/listFns')
const listFPFns = require('../_lib/listFPFns')

Promise.all([
  listFns()
    .concat(listFPFns())
    .concat([
      { fullPath: './src/fp/index.js' },
      { fullPath: './src/locale/index.js' }
    ])
    .map(module => writeToDirPackage(module.fullPath))
]).then('package.json files are generated')

function writeToDirPackage(fullPath) {
  const dirPath = path.dirname(fullPath)
  const subPath = dirPath.match(/^\.\/src\/(.+)$/)[1]
  const esmRelativePath = path.relative(
    dirPath,
    path.resolve(process.cwd(), `./src/esm/${subPath}/index.js`)
  )
  const packagePath = path.resolve(process.cwd(), `${dirPath}/package.json`)
  return fsp.writeFile(
    packagePath,
    JSON.stringify(
      {
        sideEffects: false,
        module: esmRelativePath
      },
      null,
      2
    )
  )
}
