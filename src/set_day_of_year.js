var parse = require('./parse')

/**
 * Sets day of year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} dayOfYear
 * @returns {date} (new date)
 */
var setDayOfYear = function(dirtyDate, dayOfYear) {
  var date = parse(dirtyDate)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear

