import path from 'path'
import fs from 'fs'

export default function listFunctions() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter((file) => file.match(/\.js/))
    .map((file) => file.replace(/\.js/, ''))
    .map((file) => { return {name: camelize(file), path: `./src/${file}.js`} })
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
