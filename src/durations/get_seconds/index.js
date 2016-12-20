var getTimeUnit = require('../get_time_unit')

function getSeconds (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'S')
}

module.exports = getSeconds
