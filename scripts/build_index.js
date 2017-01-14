import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'

const propertyRequireLines = listFiles()
  .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)

const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
  .concat('')
  .concat('module.exports = {')
  .concat(propertyRequireLines.join(',\n'))
  .concat('}')

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines.join('\n')}\n`)
