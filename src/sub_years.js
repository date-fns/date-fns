var addYears = require('./add_years')

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of years to be subtracted
 * @returns {Date} new date with the years subtracted
 */
var subYears = function(dirtyDate, amount) {
  return addYears(dirtyDate, -amount)
}

module.exports = subYears

