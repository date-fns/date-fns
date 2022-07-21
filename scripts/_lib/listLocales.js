const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const exists = promisify(fs.exists)
const readDir = promisify(fs.readdir)

module.exports = listLocales

const ignorePattern = /^_|\./ // can't start with `_` or have a `.` in it

async function listLocales() {
  const localesPath = path.resolve(process.cwd(), 'src/locale')
  const locales = await readDir(localesPath)

  return Promise.all(
    locales
      .filter((file) => !ignorePattern.test(file))
      .map(async (locale) => {
        const isTs = await exists(path.join(localesPath, locale, 'index.ts'))

        return {
          name: locale
            .split('-')
            .map((word, index) =>
              index === 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
            .join(''),
          code: locale,
          path: `./${locale}`,
          fullPath: `./src/locale/${locale}/index.${isTs ? 'ts' : 'js'}`,
        }
      })
  )
}
