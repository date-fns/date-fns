/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
export default function isSameMonth(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftClone = new Date(dateLeft)
  const dateRightClone = new Date(dateRight)
  return (
    dateLeftClone.getFullYear() === dateRightClone.getFullYear() &&
    dateLeftClone.getMonth() === dateRightClone.getMonth()
  )
}
