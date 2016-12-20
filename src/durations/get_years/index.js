var getTimeUnit = require('../get_time_unit')

function getYears (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'Y')
}

module.exports = getYears
