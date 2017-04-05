import differenceInMonths from '../differenceInMonths/index.js'

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} the number of full quarters
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2013, 11, 31),
 *   new Date(2014, 6, 2)
 * )
 * //=> 2
 */
export default function differenceInQuarters (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight, dirtyOptions) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
