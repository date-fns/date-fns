var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')

function getMonths (dirtyDuration) {
  if(!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getDateUnit(dirtyDuration, 'M')
}

module.exports = getMonths
