var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')

function getDays (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getDateUnit(dirtyDuration, 'D')
}

module.exports = getDays
