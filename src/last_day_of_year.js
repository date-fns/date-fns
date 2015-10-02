var parse = require('./parse')

/**
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} last day of a year
 */
var lastDayOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setHours(0, 0, 0, 0)
  date.setFullYear(year + 1, 0, 0)
  return date
}

module.exports = lastDayOfYear

