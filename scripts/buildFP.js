import fs from 'fs'
import jsDocs from '../dist/date_fns_docs.json'

const generatedAutomaticallyMessage = '// This file is generated automatically by `scripts/buildFP.js`. Please, don\'t change it.'
const FP_DIR = './src/fp'

const fpFns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .filter(doc => doc.kind === 'function' && doc.isFPFn)

buildFP(fpFns)

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

function buildFPFn ({title, generatedFrom, args: {length}}) {
  const fpFnLines = getFPFn(title, generatedFrom, length)
  const fpFnDir = `${FP_DIR}/${title}`

  if (!fs.existsSync(fpFnDir)) {
    fs.mkdirSync(fpFnDir)
  }
  fs.writeFileSync(`${fpFnDir}/index.js`, fpFnLines)
}

function buildFP (fns) {
  fns.forEach(buildFPFn)
}
