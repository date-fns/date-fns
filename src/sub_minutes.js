var addMinutes = require('./add_minutes')

/**
 * @category Minute Helpers
 * @summary Subtract the minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of minutes to be subtracted
 * @returns {Date} new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
var subMinutes = function(dirtyDate, amount) {
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes

