var parse = require('./parse')

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in the leap year
 */
var isLeapYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear

