var parse = require('./parse')

/**
 * Returns amount of minutes of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (minutes)
 */
var getMinutes = function(dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes

