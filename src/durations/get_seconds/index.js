var getTimeUnit = require('../get_time_unit')
var isValid = require('../is_valid')

function getSeconds (dirtyDuration) {
  if(!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getTimeUnit(dirtyDuration, 'S')
}

module.exports = getSeconds
