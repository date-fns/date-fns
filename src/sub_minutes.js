var addMinutes = require('./add_minutes')

/**
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} amount of minutes to be subtracted
 * @returns {Date} new date with the mintues subtracted
 */
var subMinutes = function(dirtyDate, amount) {
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes

