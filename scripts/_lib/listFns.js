import path from 'path'
import fs from 'fs'

const ignoredFiles = ['locale', 'esm', 'fp', 'index.js', 'test.js']

export default function listFns () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }))
}
