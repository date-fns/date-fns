var parse = require('./parse')

/**
 * Returns last day of a year for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var lastDayOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setHours(0, 0, 0, 0)
  date.setFullYear(year + 1, 0, 0)
  return date
}

module.exports = lastDayOfYear

