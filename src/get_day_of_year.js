var parse = require('./parse')
var startOfYear = require('./start_of_year')
var differenceInDays = require('./difference_in_days')

/**
 * Returns day of year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (day of year)
 */
var getDayOfYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear

