import listFns from './_lib/listFns'
import listFPFns from './_lib/listFPFns'
import listLocales from './_lib/listLocales'
import SystemJS from 'systemjs'
import path from 'path'

const pluginPath = path.join(process.cwd(), './node_modules/systemjs-plugin-babel')

SystemJS.config({
  map: {
    'plugin-babel': path.join(pluginPath, 'plugin-babel.js'),
    'systemjs-babel-build': path.join(pluginPath, 'systemjs-babel-browser.js')
  },
  transpiler: 'plugin-babel'
})

Promise.all(importFiles(listFns()).concat(importFiles(listFPFns())).concat(importFiles(listLocales()))).then(
  () => {
    console.log('SystemJS support is OK')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  }
)

function importFiles (files) {
  return files.map((file) => SystemJS.import(path.join(process.cwd(), file.fullPath)))
}
