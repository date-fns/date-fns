var getTimeUnit = require('../get_time_unit')
var isValid = require('../is_valid')
var CONSTANTS = require('../_lib/constants')

function getSeconds (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return CONSTANTS.INVALID_DURATION }
  return getTimeUnit(dirtyDuration, CONSTANTS.SECONDS)
}

module.exports = getSeconds
