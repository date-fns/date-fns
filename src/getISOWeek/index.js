import toDate from '../toDate/index.js'
import startOfISOWeek from '../startOfISOWeek/index.js'
import startOfISOYear from '../startOfISOYear/index.js'

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
export default function getISOWeek (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  var diff = startOfISOWeek(date, options).getTime() - startOfISOYear(date, options).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
