var getTimeUnit = require('../get_time_unit')

function getHours (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'H')
}

module.exports = getHours
