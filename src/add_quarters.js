var addMonths = require('./add_months')

/**
 * Add the specified number of quarters to the given date.
 *
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} amount of quarters to be added
 * @returns {Date} new date with the quarters added
 */
var addQuarters = function(dirtyDate, amount) {
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters

