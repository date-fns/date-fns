var parse = require('./parse')

/**
 * Return the end of a quarter for the given date
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} end of a quarter
 */
var endOfQuarter = function(dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setHours(23, 59, 59, 999)
  date.setMonth(month, 0)
  return date
}

module.exports = endOfQuarter

