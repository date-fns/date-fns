import toDate from '../toDate/index.js'
import startOfYear from '../startOfYear/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export default function getDayOfYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var diff = differenceInCalendarDays(startOfYear(date, dirtyOptions), date, dirtyOptions)
  var dayOfYear = diff + 1
  return dayOfYear
}
