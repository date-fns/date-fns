import fs from 'fs'
import path from 'path'
import listFiles from './_lib/listFiles'
import listFpFiles from './_lib/listFpFiles'

function generateIndex (files) {
  const propertyRequireLines = files
    .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)

  const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
    .concat('')
    .concat('module.exports = {')
    .concat(propertyRequireLines.join(',\n'))
    .concat('}')
    .join('\n')

  return `${indexLines}\n`
}

function generateEsmIndex (files) {
  const fileLines = files
    .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

  const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}

const files = listFiles()
const fpFiles = listFpFiles()

fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), generateIndex(files))
fs.writeFileSync(path.join(process.cwd(), 'src', 'fp', 'index.js'), generateIndex(fpFiles))
fs.writeFileSync(path.join(process.cwd(), 'src', 'esm', 'index.js'), generateEsmIndex(files))
fs.writeFileSync(path.join(process.cwd(), 'src', 'esm', 'fp', 'index.js'), generateEsmIndex(fpFiles))
