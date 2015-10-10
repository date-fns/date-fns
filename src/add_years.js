var parse = require('./parse')

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of years to be added
 * @returns {Date} new date with the years added
 */
var addYears = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setFullYear(date.getFullYear() + amount)
  return date
}

module.exports = addYears

