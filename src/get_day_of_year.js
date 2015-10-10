var parse = require('./parse')
var startOfYear = require('./start_of_year')
var differenceInDays = require('./difference_in_days')

/**
 * @category Day Helpers
 * @summary Get the day of the year.
 *
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} day of year
 */
var getDayOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear

