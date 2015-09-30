var parse = require('./parse')

/**
 * Sets day of month to passed date.
 * @param {date|string} dirtyDate
 * @param {number} dayOfMonth
 * @returns {date} (new date)
 */
var setDate = function(dirtyDate, dayOfMonth) {
  var date = parse(dirtyDate)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate

