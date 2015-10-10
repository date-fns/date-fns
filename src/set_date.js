var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Set the day of the month.
 *
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} dayOfMonth of the new date
 * @returns {Date} new date with the day of the month setted
 */
var setDate = function(dirtyDate, dayOfMonth) {
  var date = parse(dirtyDate)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate

