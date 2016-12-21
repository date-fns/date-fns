var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')

function getWeeks (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getDateUnit(dirtyDuration, 'W')
}

module.exports = getWeeks
