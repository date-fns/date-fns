import fs from 'fs'
import path from 'path'
import listFns from './_lib/listFns'
import listFPFns from './_lib/listFPFns'

const generatedAutomaticallyMessage = '// This file is generated automatically by `scripts/buildIndex.js`. Please, don\'t change it.'

function generateIndex (files) {
  const propertyRequireLines = files
    .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat('module.exports = {')
    .concat(propertyRequireLines.join(',\n'))
    .concat('}')
    .join('\n')

  return `${indexLines}\n`
}

function generateESMIndex (files) {
  const fileLines = files
    .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}

const files = listFns()
const fpFiles = listFPFns()

fs.writeFileSync(path.join(process.cwd(), 'src', 'index.js'), generateIndex(files))
fs.writeFileSync(path.join(process.cwd(), 'src', 'fp', 'index.js'), generateIndex(fpFiles))
fs.writeFileSync(path.join(process.cwd(), 'src', 'esm', 'index.js'), generateESMIndex(files))
fs.writeFileSync(path.join(process.cwd(), 'src', 'esm', 'fp', 'index.js'), generateESMIndex(fpFiles))
