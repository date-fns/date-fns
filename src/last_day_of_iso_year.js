var getISOYear = require('./get_iso_year')
var startOfISOWeek = require('./start_of_iso_week')

/**
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} end of an ISO year
 */
var lastDayOfISOYear = function(dirtyDate) {
  var year = getISOYear(dirtyDate)
  var date = startOfISOWeek(new Date(year + 1, 0, 4))
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear

