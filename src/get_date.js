var parse = require('./parse')

/**
 * Returns day of month of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (day of month)
 */
var getDate = function(dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate

