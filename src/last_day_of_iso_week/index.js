import lastDayOfWeek from '../last_day_of_week/index.js'
import cloneObject from '../_lib/clone_object/index.js'

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate, options) {
  var lastDayOfWeekOptions = cloneObject(options)
  lastDayOfWeekOptions.weekStartsOn = 1
  return lastDayOfWeek(dirtyDate, lastDayOfWeekOptions)
}

export default lastDayOfISOWeek
