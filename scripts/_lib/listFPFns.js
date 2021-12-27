const path = require('path')
const fs = require('fs')

module.exports = listFPFns

const ignorePattern = /^_|\./ // can't start with `_` or have a `.` in it

function listFPFns() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'fp'))

  return files
    .filter((file) => !ignorePattern.test(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/fp/${file}/index.js`,
    }))
}
