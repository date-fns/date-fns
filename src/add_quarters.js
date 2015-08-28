var addMonths = require('./add_months')

/**
 * Adds specified number of quarters to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addQuarters = function(dirtyDate, amount) {
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters

