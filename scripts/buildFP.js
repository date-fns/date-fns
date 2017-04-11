import fs from 'fs'
import jsDocs from '../dist/date_fns_docs.json'
import listFiles from './_lib/listFiles'

const generatedAutomaticallyMessage = '// This file is generated automatically by `scripts/buildFP.js`. Please, don\'t change it.'
const FP_DIR = './src/fp'

const files = listFiles()

const fns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .map(doc => {
    const {name} = doc.content
    const file = files.find(file => file.name === name)
    doc.file = file
    return doc
  })
  .filter(doc => doc.file)
  .sort((a, b) => a.content.name.localeCompare(b.content.name))

buildFP(fns)

function getFPFn (resultFnName, initialFnName, arity) {
  return [generatedAutomaticallyMessage]
    .concat('')
    .concat(`import fn from '../../${initialFnName}/index.js'`)
    .concat(`import convertToFP from '../_lib/convertToFP/index.js'`)
    .concat('')
    .concat(`var ${resultFnName} = convertToFP(fn, ${arity})`)
    .concat('')
    .concat(`export default ${resultFnName}`)
    .concat('')
    .join('\n')
}

function buildFPFn (fn) {
  const {name, params} = fn.content
  const nameWithOptions = `${name}WithOptions`
  const arity = params.filter((param) => !param.name.includes('.')).length

  const fpFnLines = getFPFn(name, name, arity - 1)
  const fpFnDir = `${FP_DIR}/${name}`

  if (!fs.existsSync(fpFnDir)) {
    fs.mkdirSync(fpFnDir)
  }
  fs.writeFileSync(`${fpFnDir}/index.js`, fpFnLines)

  const fpFnWithOptionsLines = getFPFn(nameWithOptions, name, arity)
  const fpFnWithOptionsDir = `${FP_DIR}/${nameWithOptions}`

  if (!fs.existsSync(fpFnWithOptionsDir)) {
    fs.mkdirSync(fpFnWithOptionsDir)
  }
  fs.writeFileSync(`${fpFnWithOptionsDir}/index.js`, fpFnWithOptionsLines)
}

function buildFP (fns) {
  fns.forEach(buildFPFn)
}
