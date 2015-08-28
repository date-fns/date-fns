var addQuarters = require('./add_quarters')

/**
 * Subtracts specified number of quarters from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subQuarters = function(dirtyDate, amount) {
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters

