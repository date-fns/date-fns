var parse = require('./parse')

/**
 * Returns number of days of month of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (days)
 */
var getDaysInMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  return new Date(year, monthIndex + 1, 0).getDate()
}

module.exports = getDaysInMonth

