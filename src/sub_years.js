var addYears = require('./add_years')

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} new date with the years subtracted
 */
var subYears = function(dirtyDate, amount) {
  return addYears(dirtyDate, -amount)
}

module.exports = subYears

