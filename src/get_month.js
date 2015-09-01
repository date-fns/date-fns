var parse = require('./parse')

/**
 * Returns month of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (month)
 */
var getMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth

