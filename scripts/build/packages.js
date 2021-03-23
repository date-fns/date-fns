#!/usr/bin/env node

/**
 * @file
 * The script generates package.json files that points to correct ESM modules
 * and TypeScript typings.
 *
 * It's a part of the build process.
 */

const { writeFile } = require('mz/fs')
const path = require('path')
const listFns = require('../_lib/listFns')
const listFPFns = require('../_lib/listFPFns')
const listLocales = require('../_lib/listLocales')
const rootPath =
  process.env.PACKAGE_OUTPUT_PATH || path.resolve(process.cwd(), 'tmp/package')

const extraModules = [
  { fullPath: './src/fp/index.js' },
  { fullPath: './src/locale/index.js' },
]

const initialPackages = getInitialPackages()

listAll()
  .then((modules) =>
    Promise.all(modules.map((module) => writePackage(module.fullPath)))
  )
  .then('package.json files are generated')

function writePackage(fullPath) {
  const dirPath = path.dirname(fullPath)
  const typingsRelativePath = path.relative(dirPath, `./src/typings.d.ts`)
  const packagePath = path.resolve(
    rootPath,
    `${dirPath.replace('./src/', './')}/package.json`
  )

  return writeFile(
    packagePath,
    JSON.stringify(
      Object.assign({ sideEffects: false }, initialPackages[fullPath] || {}, {
        typings: typingsRelativePath,
      }),
      null,
      2
    )
  )
}

async function getInitialPackages() {
  const [fns, locales] = await Promise.all([listFns(), listLocales()])
  return fns
    .concat(listFPFns())
    .concat(locales)
    .concat(extraModules)
    .reduce((acc, module) => {
      acc[module.fullPath] = getModulePackage(module.fullPath)
      return acc
    }, {})
}

function getModulePackage(fullPath) {
  const dirPath = path.dirname(fullPath)
  const subPath = dirPath.match(/^\.\/src\/(.+)$/)[1]
  const esmRelativePath = path.relative(
    dirPath,
    `./src/esm/${subPath}/index.js`
  )
  return { module: esmRelativePath }
}

async function listAll() {
  const [fns, locales] = await Promise.all([listFns(), listLocales()])
  return fns
    .concat(listFPFns())
    .concat(locales)
    .concat(extraModules)
    .reduce((acc, module) => {
      const esmModule = Object.assign({}, module, {
        fullPath: module.fullPath.replace('./src/', './src/esm/'),
      })
      return acc.concat([module, esmModule])
    }, [])
    .concat([])
}
