var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')
var CONSTANTS = require('../constants')

function getYears (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return CONSTANTS.INVALID_DURATION }
  return getDateUnit(dirtyDuration, 'Y')
}

module.exports = getYears
