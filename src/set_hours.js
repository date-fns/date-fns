var parse = require('./parse')

/**
 * Sets amount of hours to passed date.
 * @param {date|string} dirtyDate
 * @param {number} hours
 * @returns {date} (new date)
 */
var setHours = function(dirtyDate, hours) {
  var date = parse(dirtyDate)
  date.setHours(hours)
  return date
}

module.exports = setHours

