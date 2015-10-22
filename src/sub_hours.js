var addHours = require('./add_hours')

/**
 * @category Hour Helpers
 * @summary Subtract hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} new date with the hours subtracted
 */
var subHours = function(dirtyDate, amount) {
  return addHours(dirtyDate, -amount)
}

module.exports = subHours

