var parse = require('./parse')

/**
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} end of a year
 */
var endOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setHours(23, 59, 59, 999)
  date.setFullYear(year + 1, 0, 0)
  return date
}

module.exports = endOfYear

