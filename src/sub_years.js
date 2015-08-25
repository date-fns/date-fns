var addYears = require('./add_years')

/**
 * Subtracts specified number of years from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subYears = function(dirtyDate, amount) {
  return addYears(dirtyDate, -amount)
}

module.exports = subYears

