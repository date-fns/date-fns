var parse = require('../parse')
var startOfDay = require('../start_of_day')
var startOfISOYear = require('../start_of_iso_year')

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfDay(date).getTime() - startOfISOYear(date).getTime()
  return Math.floor(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek

