import toDate from '../to_date/index.js'
import startOfYear from '../start_of_year/index.js'
import differenceInCalendarDays from '../difference_in_calendar_days/index.js'

/**
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
function getDayOfYear (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  var diff = differenceInCalendarDays(startOfYear(date, options), date, options)
  var dayOfYear = diff + 1
  return dayOfYear
}

export default getDayOfYear
