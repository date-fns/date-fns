var addHours = require('./add_hours')

/**
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of hours to be subtracted
 * @returns {Date} new date with the hours subtracted
 */
var subHours = function(dirtyDate, amount) {
  return addHours(dirtyDate, -amount)
}

module.exports = subHours

