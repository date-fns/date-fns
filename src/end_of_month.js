var parse = require('./parse')

/**
 * Returns end of a month for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setHours(23, 59, 59, 999)
  date.setFullYear(date.getFullYear(), month + 1, 0)
  return date
}

module.exports = endOfMonth

