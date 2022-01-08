/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
export default function isSameMonth(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftTransformed = new Date(dateLeft)
  const dateRightTransformed = new Date(dateRight)
  return (
    dateLeftTransformed.getFullYear() === dateRightTransformed.getFullYear() &&
    dateLeftTransformed.getMonth() === dateRightTransformed.getMonth()
  )
}
