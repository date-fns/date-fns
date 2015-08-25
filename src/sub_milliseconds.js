var addMilliseconds = require('./add_milliseconds')

/**
 * Subtracts specified number of milliseconds from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of milliseconds
 * @returns {date} new date
 */
var subMilliseconds = function(dirtyDate, amount) {
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds

