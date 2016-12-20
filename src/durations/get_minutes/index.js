var getTimeUnit = require('../get_time_unit')

function getMinutes (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'M')
}

module.exports = getMinutes
