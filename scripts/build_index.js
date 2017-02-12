import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'

const files = listFiles()

const propertyRequireLines = files
  .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)

const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
  .concat('')
  .concat('module.exports = {')
  .concat(propertyRequireLines.join(',\n'))
  .concat('}')
  .join('\n')

fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), `${indexLines}\n`)

const esmFileLines = files
  .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

const esmIndexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
  .concat('')
  .concat(esmFileLines)
  .join('\n')

fs.writeFileSync(path.join(process.cwd(), 'src', 'esm', 'index.js'), `${esmIndexLines}\n`)
