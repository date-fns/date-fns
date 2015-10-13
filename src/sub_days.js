var addDays = require('./add_days')

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of days to be subtracted
 * @returns {Date} new date with the days subtracted
 */
var subDays = function(dirtyDate, amount) {
  return addDays(dirtyDate, -amount)
}

module.exports = subDays

