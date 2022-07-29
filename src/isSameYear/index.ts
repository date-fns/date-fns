import toDate from '../toDate/index'

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
export default function isSameYear<DateType extends Date>(
  dirtyDateLeft: ReadonlyDate<DateType> | number,
  dirtyDateRight: ReadonlyDate<DateType> | number
): boolean {
  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}
