var parse = require('../parse')

/**
 * @category Day Helpers
 * @summary Set the day of the month.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
var setDate = function(dirtyDate, dayOfMonth) {
  var date = parse(dirtyDate)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate

