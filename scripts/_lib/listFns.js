const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const exists = promisify(fs.exists)
const readDir = promisify(fs.readdir)

module.exports = listFns

const ignorePattern = /^_|\./ // can't start with `_` or have a `.` in it
const ignoredDirs = ['locale', 'esm', 'fp', 'constants']

async function listFns() {
  const srcPath = path.join(process.cwd(), 'src')
  const files = await readDir(srcPath)

  return Promise.all(
    files
      .filter(
        (file) => !ignorePattern.test(file) && !ignoredDirs.includes(file)
      )
      .map(async (file) => {
        const isTs = await exists(path.join(srcPath, file, 'index.ts'))

        return {
          name: file,
          path: `./${file}`,
          fullPath: `./src/${file}/index.${isTs ? 'ts' : 'js'}`,
        }
      })
  )
}
