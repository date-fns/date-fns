const prettier = require('prettier')
const config = require('../../../.prettierrc')

module.exports = (code, parser = 'babel') => {
  return prettier.format(code, Object.assign(config, { parser }))
}
