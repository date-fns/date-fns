var addSeconds = require('./add_seconds')

/**
 * Subtracts specified number of seconds from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of seconds
 * @returns {date} new date
 */
var subSeconds = function(dirtyDate, amount) {
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds

