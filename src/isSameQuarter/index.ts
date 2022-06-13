import startOfQuarter from '../startOfQuarter/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
export default function isSameQuarter<DateType extends Date>(
  dirtyDateLeft: DateType | number,
  dirtyDateRight: DateType | number
): boolean {
  requiredArgs(2, arguments)

  const dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  const dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}
