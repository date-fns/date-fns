var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Get the day of the month.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of days to be added
 * @returns {Date} new date with the days added
 */
var addDays = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays

