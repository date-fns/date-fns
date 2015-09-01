var parse = require('./parse')

/**
 * Returns start of a year for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfYear = function(dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0)
  return date
}

module.exports = startOfYear

