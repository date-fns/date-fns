const path = require('path')
const fs = require('fs')

module.exports = listFns

const ignoredFiles = ['locale', 'esm', 'fp', 'index.js', 'test.js']

function listFns () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }))
}
