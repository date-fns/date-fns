import differenceInMilliseconds from '../differenceInMilliseconds/index.js'

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} the number of hours
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 6, 50),
 *   new Date(2014, 6, 2, 19, 0)
 * )
 * //=> 12
 */
export default function differenceInHours (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight, dirtyOptions) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
