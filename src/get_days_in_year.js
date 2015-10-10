var isLeapYear = require('./is_leap_year')

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} number of days in a year
 */
var getDaysInYear = function(dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear

