import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
export default function isEqual<DateType extends Date>(
  dirtyLeftDate: DateType | number,
  dirtyRightDate: DateType | number
): boolean {
  requiredArgs(2, arguments)

  const dateLeft = toDate(dirtyLeftDate)
  const dateRight = toDate(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}
