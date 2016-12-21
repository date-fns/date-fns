var getTimeUnit = require('../get_time_unit')
var isValid = require('../is_valid')

function getHours (dirtyDuration) {
  if(!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getTimeUnit(dirtyDuration, 'H')
}

module.exports = getHours
