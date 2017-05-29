const path = require('path')
const fs = require('fs')

module.exports = listLocales

function listLocales () {
  const locales = fs.readdirSync(path.join(process.cwd(), 'src', 'locale'))
  return locales
    .filter((locale) => /^[^._]/.test(locale))
    .map((locale) => ({
      name: `${locale}Locale`,
      code: locale,
      path: `./locale/${locale}`,
      fullPath: `./src/locale/${locale}/index.js`
    }))
}
