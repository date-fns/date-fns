import startOfQuarter from '../start_of_quarter/index.js'

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft, options)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight, options)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

export default isSameQuarter
