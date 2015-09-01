var parse = require('./parse')

/**
 * Returns start of a quarter for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfQuarter = function(dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setHours(0, 0, 0, 0)
  date.setMonth(month, 1)
  return date
}

module.exports = startOfQuarter

