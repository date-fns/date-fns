import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'

const files = listFiles()

const fileLines = files
  .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
  .concat('')
  .concat(fileLines)
  .join('\n')

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines}\n`)

