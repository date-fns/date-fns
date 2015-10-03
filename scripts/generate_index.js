import path from 'path'
import fs from 'fs'

const files = fs.readdirSync(path.join(process.cwd(), 'src'))

const propertyRequireLines = files
  .filter((file) => file.match(/\.js/))
  .map((file) => file.replace(/\.js/, ''))
  .map((file) => `  ${camelize(file)}: require('./src/${file}')`)

const indexLines = ['module.exports = {']
  .concat(propertyRequireLines.join(',\n'))
  .concat('}')

fs.writeFileSync(path.join(process.cwd(), 'index.js'), `${indexLines.join('\n')}\n`)

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
