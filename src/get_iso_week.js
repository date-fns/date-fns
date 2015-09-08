var parse = require('./parse')
var startOfDay = require('./start_of_day')
var startOfISOYear = require('./start_of_iso_year')

var MILLISECONDS_IN_WEEK = 604800000

/**
 * Returns ISO week of given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {date|string} dirtyDate
 * @returns {number} (ISO week)
 *
 * @example which week of ISO-week numbering year is 2 January 2005
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
var getISOWeek = function(dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfDay(date).getTime() - startOfISOYear(date).getTime()
  return Math.floor(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek

