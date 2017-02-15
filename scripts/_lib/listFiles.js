import path from 'path'
import fs from 'fs'

export default function listFiles () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter((file) => /^[^._]/.test(file) && file !== 'locale' && file !== 'esm' && file !== 'fp' && file !== 'index.js')
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }))
}
