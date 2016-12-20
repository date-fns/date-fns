var getTimeUnit = require('../get_time_unit')

function getDays (dirtyDuration) {
  return getTimeUnit(dirtyDuration, 'D')
}

module.exports = getDays
