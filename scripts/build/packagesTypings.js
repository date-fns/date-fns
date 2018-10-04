#!/usr/bin/env node

/**
 * @file
 * The script adds typings fields to package.json files
 * that points to correct TypeScript typings.
 *
 * It's a part of the build process.
 */

const { readFile, writeFile, exists } = require('mz/fs')
const path = require('path')
const listFns = require('../_lib/listFns')
const listFPFns = require('../_lib/listFPFns')
const listLocales = require('../_lib/listLocales')
const rootPath =
  process.env.PACKAGE_OUTPUT_PATH || path.resolve(process.cwd(), 'tmp/package')

Promise.all([listAll().map(module => updatePackage(module.fullPath))]).then(
  'typings fields in package.json are updated'
)

function listAll() {
  return listFns()
    .concat(listFPFns())
    .concat(listLocales())
    .reduce((acc, module) => {
      const esmModule = Object.assign({}, module, {
        fullPath: module.fullPath.replace('./src/', './src/esm/')
      })
      return acc.concat([module, esmModule])
    }, [])
}

function updatePackage(fullPath) {
  const dirPath = path.dirname(fullPath)
  const typingsRelativePath = path.relative(dirPath, `./src/typings.d.ts`)
  const packagePath = path.resolve(
    rootPath,
    `${dirPath.replace('./src/', './')}/package.json`
  )

  return readFile(packagePath, 'utf8')
    .then(str => JSON.parse(str))
    .catch(() => ({}))
    .then(packageBase =>
      writeFile(
        packagePath,
        JSON.stringify(
          Object.assign({}, packageBase, {
            sideEffects: false,
            typings: typingsRelativePath
          }),
          null,
          2
        )
      )
    )
}
