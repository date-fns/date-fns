var addSeconds = require('./add_seconds')

/**
 * Subtract the specified number of seconds from the given date.
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} amount of seconds to be subtracted
 * @returns {Date} new date with the seconds subtracted
 */
var subSeconds = function(dirtyDate, amount) {
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds

