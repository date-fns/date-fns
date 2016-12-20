var getDateUnit = require('../get_date_unit')

function getMonths (dirtyDuration) {
  return getDateUnit(dirtyDuration, 'M')
}

module.exports = getMonths
