var getTimeUnit = require('../get_time_unit')
var isValid = require('../is_valid')
var CONSTANTS = require('../constants')

function getSeconds (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return CONSTANTS.INVALID_DURATION }
  return getTimeUnit(dirtyDuration, 'S')
}

module.exports = getSeconds
