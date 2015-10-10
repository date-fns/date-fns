var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Get the day of the month.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} day of month
 */
var getDate = function(dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate

