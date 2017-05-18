import path from 'path'
import fs from 'fs'

const ignoredFiles = ['index.js', 'test.js']

export default function listFPFns () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/fp'))
  return files
    .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/fp/${file}/index.js`
    }))
}
