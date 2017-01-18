import startOfSecond from '../start_of_second/index.js'

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 * */
export default function isSameSecond (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft, options)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight, options)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

