import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import SystemJS from 'systemjs'
import path from 'path'

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
  return listLocales().map((locale) => SystemJS.import(path.resolve(`src/${locale.path}/index.js`)))
}
