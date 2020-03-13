const path = require('path')
const fs = require('fs')

module.exports = listFns

const ignoredFiles = [
  'locale',
  'esm',
  'fp',
  'constants',
  'index.js',
  'test.js',
  'index.js.flow',
  'package.json'
]

function listFns() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter(file => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map(file => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }))
}
