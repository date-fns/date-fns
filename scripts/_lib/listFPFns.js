const path = require('path')
const fs = require('fs')

module.exports = listFPFns

const ignoredFiles = ['index.js', 'test.js', 'index.js.flow']

function listFPFns () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'fp'))
  return files
    .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/fp/${file}/index.js`
    }))
}
