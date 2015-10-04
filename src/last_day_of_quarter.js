var parse = require('./parse')

/**
 * Return the last day of a quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} last day of a quarter
 */
var lastDayOfQuarter = function(dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter

