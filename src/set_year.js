var parse = require('./parse')

/**
 * Sets year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} fullYear
 * @returns {date} (new date)
 */
var setYear = function(dirtyDate, fullYear) {
  var date = parse(dirtyDate)
  date.setFullYear(fullYear)
  return date
}

module.exports = setYear

