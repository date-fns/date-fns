import startOfQuarter from '../startOfQuarter/index.js'

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same quarter
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
export default function isSameQuarter (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}
