var addQuarters = require('./add_quarters')

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} new date with the quarters subtracted
 */
var subQuarters = function(dirtyDate, amount) {
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters

