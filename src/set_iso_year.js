var parse = require('./parse')
var startOfISOYear = require('./start_of_iso_year')
var differenceInDays = require('./difference_in_days')

/**
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} isoYear of the new date
 * @returns {Date} new date with the ISO year setted
 */
var setISOYear = function(dirtyDate, isoYear) {
  var date = parse(dirtyDate)
  var diff = differenceInDays(date, startOfISOYear(date))
  date = startOfISOYear(new Date(isoYear, 0, 4))
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear

