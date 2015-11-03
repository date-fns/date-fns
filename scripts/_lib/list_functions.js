import path from 'path'
import fs from 'fs'

export default function listFunctions() {
  const files = fs.readdirSync(path.join(process.cwd(), '.'))
  return files
    .filter((file) => fs.statSync(file).isDirectory())
    .filter((file) => !file.startsWith('.'))
    .filter((file) => ['config', 'dist', 'docs', 'node_modules', 'scripts',  'tmp'].indexOf(file) < 0)
    .map((file) => { return {name: camelize(file), path: `./${file}`, fullPath: `./${file}/index.js`} })
}

function camelize(str) {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word
      } else if (word === 'iso') {
        return 'ISO'
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join('')
}
