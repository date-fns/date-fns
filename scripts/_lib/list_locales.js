import path from 'path'
import fs from 'fs'

export default function listLocales () {
  const locales = fs.readdirSync(path.join(process.cwd(), 'src', 'locale'))
  return locales
    .filter((locale) => /^[^._]/.test(locale))
    .map((locale) => ({
      name: `${camelize(locale)}Locale`,
      snakeCaseName: locale,
      path: `./locale/${locale}`,
      fullPath: `./src/locale/${locale}/index.js`
    }))
}

function camelize (str) {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join('')
}
