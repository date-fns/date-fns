import startOfWeek from '../start_of_week/index.js'
import cloneObject from '../_lib/clone_object/index.js'

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 * */
export default function startOfISOWeek (dirtyDate, options) {
  var startOfWeekOptions = cloneObject(options)
  startOfWeekOptions.weekStartsOn = 1
  return startOfWeek(dirtyDate, startOfWeekOptions)
}

