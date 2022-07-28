import toDate from '../toDate/index'

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
  const dateLeft = toDate(dirtyLeftDate)
  const dateRight = toDate(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}
