var parse = require('./parse')
var startOfWeek = require('./start_of_week')

/**
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} start of an ISO year
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

