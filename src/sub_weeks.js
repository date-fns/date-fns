var addWeeks = require('./add_weeks')

/**
 * @category Week Helpers
 * @summary Subtract specified number of weeks from the given date.
 *
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of weeks to be subtracted
 * @returns {Date} new date with the weeks subtracted
 */
var subWeeks = function(dirtyDate, amount) {
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks

