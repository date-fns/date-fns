var getTimeUnit = require('../get_time_unit')

function getWeeks (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'W')
}

module.exports = getWeeks
