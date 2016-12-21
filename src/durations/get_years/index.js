var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')

function getYears (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getDateUnit(dirtyDuration, 'Y')
}

module.exports = getYears
