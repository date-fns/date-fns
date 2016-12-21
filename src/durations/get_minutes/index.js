var getTimeUnit = require('../get_time_unit')
var isValid = require('../is_valid')

function getMinutes (dirtyDuration) {
  if(!isValid(dirtyDuration)) { return 'Invalid Duration' }
  return getTimeUnit(dirtyDuration, 'M')
}

module.exports = getMinutes
