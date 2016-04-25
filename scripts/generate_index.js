import fs from 'fs'
import path from 'path'
import listFunctions from './_lib/list_files'

const propertyRequireLines = listFunctions()
  .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}')`)

const indexLines = ['module.exports = {']
  .concat(propertyRequireLines.join(',\n'))
  .concat('}')

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines.join('\n')}\n`)
