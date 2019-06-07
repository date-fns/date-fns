const prettier = require('prettier')
const packageJSON = require('../../../package.json')
const config = packageJSON.prettier

module.exports = (code, parser = 'babylon') => {
  return prettier.format(code, Object.assign(config, { parser }))
}
