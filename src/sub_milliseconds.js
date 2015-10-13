var addMilliseconds = require('./add_milliseconds')

/**
 * @category Millisecond Helpers
 * @summary Subtract the milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of milliseconds to be subtracted
 * @returns {Date} new date with the milliseconds subtracted
 */
var subMilliseconds = function(dirtyDate, amount) {
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds

