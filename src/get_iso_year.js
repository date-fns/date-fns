var parse = require('./parse')
var startOfISOWeek = require('./start_of_iso_week')

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} ISO year
 *
 * @example which ISO-week numbering year is 2 January 2005
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
var getISOYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var startOfNextYear = startOfISOWeek(new Date(year + 1, 0, 4))
  var startOfThisYear = startOfISOWeek(new Date(year, 0, 4))

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear

