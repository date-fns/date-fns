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
 */
var subMinutes = function(dirtyDate, amount) {
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes

