var addWeeks = require('./add_weeks')

/**
 * Subtracts specified number of weeks from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subWeeks = function(dirtyDate, amount) {
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks

