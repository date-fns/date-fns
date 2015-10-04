var addMonths = require('./add_months')

/**
 * Subtract the specified number of month from the gien date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of months to be subtracted
 * @returns {Date} new date with the months subtracted
 */
var subMonths = function(dirtyDate, amount) {
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths

