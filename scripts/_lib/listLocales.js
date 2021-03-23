const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const exists = promisify(fs.exists)
const readDir = promisify(fs.readdir)

const ignoredFiles = [
  'index.js',
  'test.js',
  'index.js.flow',
  'package.json',
  'types.ts',
]

module.exports = listLocales

async function listLocales() {
  const localesPath = path.resolve(process.cwd(), 'src/locale')
  const locales = await readDir(localesPath)

  return Promise.all(
    locales
      .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
      .map(async (locale) => {
        const isTs = await exists(path.join(localesPath, locale, 'index.ts'))
        return {
          name: locale.replace(/-/g, ''),
          code: locale,
          path: `./${locale}`,
          fullPath: `./src/locale/${locale}/index.${isTs ? 'ts' : 'js'}`,
        }
      })
  )
}
