import listFiles from './_lib/list_files'
import SystemJS from 'systemjs'
import path from 'path'

Promise.all(listFiles().map((file) => {
  return SystemJS.import(path.resolve(`src/${file.path}/index.js`))
})).then(
  () => {
    console.log('SystemJS support is OK')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  }
)
