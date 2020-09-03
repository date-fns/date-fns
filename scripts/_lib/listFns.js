const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const exists = promisify(fs.exists)
const readDir = promisify(fs.readdir)

module.exports = listFns

const ignoredFiles = [
  'locale',
  'esm',
  'fp',
  'constants',
  'index.ts',
  'test.ts',
  'index.js.flow',
  'package.json',
  'types.ts'
]

async function listFns() {
  const srcPath = path.join(process.cwd(), 'src')
  const files = await readDir(srcPath)

  return Promise.all(
    files
      .filter(file => /^[^._]/.test(file) && !ignoredFiles.includes(file))
      .map(async file => {
        const isTs = await exists(path.join(srcPath, file, 'index.ts'))
        return {
          name: file,
          path: `./${file}`,
          fullPath: `./src/${file}/index.${isTs ? 'ts' : 'js'}`
        }
      })
  )
}
