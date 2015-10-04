var parse = require('./parse')

/**
 * Get the month of the given date.
 *
 * @param {Date|String|Number} dirtyDate - the given date
 * @returns {Number} month
 */
var getMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth

