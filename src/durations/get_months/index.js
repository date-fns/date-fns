var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')
var CONSTANTS = require('../_lib/constants')

function getMonths (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return CONSTANTS.INVALID_DURATION }
  return getDateUnit(dirtyDuration, CONSTANTS.MONTHS)
}

module.exports = getMonths
