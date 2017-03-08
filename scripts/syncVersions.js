import path from 'path'
import fs from 'fs'
import jsBeautify from 'js-beautify'

const beautify = jsBeautify['js_beautify']

const version = fs.readFileSync(path.join(process.cwd(), 'VERSION'))
  .toString()
  .replace(/[\s\n]/g, '')

const bowerJSONPath = path.join(process.cwd(), 'bower.json')
const packageJSONPath = path.join(process.cwd(), 'package.json')

;[bowerJSONPath, packageJSONPath].forEach((packagePath) => {
  const packageContent = JSON.parse(fs.readFileSync(packagePath).toString())
  packageContent.version = version
  const newPackageContentStr = beautify(JSON.stringify(packageContent), {'indent_size': 2})
  fs.writeFileSync(packagePath, `${newPackageContentStr}\n`)
})
