import startOfSecond from '../startOfSecond/index.js'

/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same second
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
export default function isSameSecond (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}
