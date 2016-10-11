import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import SystemJS from 'systemjs'
import path from 'path'

Promise.all(
  listFiles().map(file => SystemJS.import(path.resolve(`src/${file.path}/index.js`)))
    .concat(locale => SystemJS.import(path.resolve(`src/locale/${locale.name}/index.js`)))
).then(
  () => {
    console.log('SystemJS support is OK')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  }
)
