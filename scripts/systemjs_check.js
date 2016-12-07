import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import SystemJS from 'systemjs'
import path from 'path'

const pluginPath = path.resolve(__dirname, '../node_modules/systemjs-plugin-babel')

SystemJS.config({
  map: {
    'plugin-babel': path.join(pluginPath, 'plugin-babel.js'),
    'systemjs-babel-build': path.join(pluginPath, 'systemjs-babel-browser.js')
  },
  transpiler: 'plugin-babel'
})

Promise.all(importFns().concat(importLocales())).then(
  () => {
    console.log('SystemJS support is OK')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  }
)

function importFns () {
  return listFiles().map((file) => SystemJS.import(path.resolve(`src/${file.path}/index.js`)))
}

function importLocales () {
  return listLocales().map((locale) => SystemJS.import(path.resolve(`src/locale/${locale.name}/index.js`)))
}
