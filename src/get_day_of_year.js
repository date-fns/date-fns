var parse = require('./parse')
var startOfYear = require('./start_of_year')
var differenceInCalendarDays = require('./difference_in_calendar_days')

/**
 * @category Day Helpers
 * @summary Get the day of the year.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} day of year
 */
var getDayOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear

