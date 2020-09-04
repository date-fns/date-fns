const path = require('path')
const jsDocParser = require('jsdoc-to-markdown')

module.exports = getConstants

function getConstants() {
  return jsDocParser
    .getJsdocDataSync({
      files: path.resolve(process.cwd(), 'src/constants/index.ts'),
      'no-cache': true,
      configure: path.resolve(process.cwd(), 'jsdoc2md.json')
    })
    .filter(c => c.kind === 'constant' && !c.undocumented)
}
