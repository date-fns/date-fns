var parse = require('./parse')

/**
 * Get the day of the month of the given date.
 * @param {Date|String|Number} dirtyDate - the given date
 * @returns {Number} day of month
 */
var getDate = function(dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate

