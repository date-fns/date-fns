var parse = require('./parse')
var startOfWeek = require('./start_of_week')

/**
 * Returns start of ISO week-numbering year,
 * which always starts 3 days before year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date} (new date)
 *
 * @example when ISO week-numbering 2005 year starts
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
var startOfISOYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var startOfNextYear = startOfWeek(new Date(date.getFullYear() + 1, 0, 4), 1)
  var startOfThisYear = startOfWeek(new Date(date.getFullYear(), 0, 4), 1)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return startOfNextYear
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return startOfThisYear
  } else {
    return startOfWeek(new Date(date.getFullYear() - 1, 0, 4), 1)
  }
}

module.exports = startOfISOYear

