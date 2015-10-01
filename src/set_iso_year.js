var parse = require('./parse')
var startOfISOYear = require('./start_of_iso_year')
var differenceInDays = require('./difference_in_days')

var MILLISECONDS_IN_DAY = 86400000

/**
 * Sets ISO week-numbering year to given date,
 * saving week number and weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {date|string} dirtyDate
 * @param {number} isoYear
 * @returns {date} (new date)
 */
var setISOYear = function(dirtyDate, isoYear) {
  var date = parse(dirtyDate)
  var diff = differenceInDays(date, startOfISOYear(date))
  date = startOfISOYear(new Date(isoYear, 0, 4))
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear

