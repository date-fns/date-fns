var parse = require('../parse')
var startOfISOYear = require('../start_of_iso_year')
var differenceInCalendarDays = require('../difference_in_calendar_days')

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, isoYear) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  date = startOfISOYear(new Date(isoYear, 0, 4))
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear
