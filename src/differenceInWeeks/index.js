import differenceInDays from '../differenceInDays/index.js'

/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} the number of full weeks
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 5),
 *   new Date(2014, 6, 20)
 * )
 * //=> 2
 */
export default function differenceInWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight, dirtyOptions) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
