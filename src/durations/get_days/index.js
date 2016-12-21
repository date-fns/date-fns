var getDateUnit = require('../get_date_unit')

function getDays (dirtyDuration) {
  return getDateUnit(dirtyDuration, 'D')
}

module.exports = getDays
