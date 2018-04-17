#!/usr/bin/env node

/**
 * @file
 * The scripts verifies the SystemJS support by compiling the library with it.
 *
 * It's a part of the test process.
 */

const listFns = require('../_lib/listFns')
const listFPFns = require('../_lib/listFPFns')
const listLocales = require('../_lib/listLocales')
const SystemJS = require('systemjs')
const path = require('path')

const outdatedLocales = require('../../outdatedLocales.json')

const pluginPath = path.join(
  process.cwd(),
  './node_modules/systemjs-plugin-babel'
)

SystemJS.config({
  map: {
    'plugin-babel': path.join(pluginPath, 'plugin-babel.js'),
    'systemjs-babel-build': path.join(pluginPath, 'systemjs-babel-browser.js')
  },
  transpiler: 'plugin-babel'
})

Promise.all(
  importFiles(listFns())
    .concat(importFiles(listFPFns()))
    .concat(importFiles(listLocales().filter(({code}) => !outdatedLocales.includes(code))))
).then(
  () => {
    console.log('SystemJS support is OK')
  },
  err => {
    console.error(err)
    process.exit(1)
  }
)

function importFiles (files) {
  return files.map(file =>
    SystemJS.import(path.join(process.cwd(), file.fullPath))
  )
}
