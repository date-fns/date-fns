var parse = require('./parse')

/**
 * Sets amount of minutes to passed date.
 * @param {date|string} dirtyDate
 * @param {number} minutes
 * @returns {date} (new date)
 */
var setMinutes = function(dirtyDate, minutes) {
  var date = parse(dirtyDate)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes

