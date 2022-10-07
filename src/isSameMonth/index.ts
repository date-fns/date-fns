import toDate from '../toDate/index'

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
 * @returns the dates are in the same month (and year)
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
export default function isSameMonth<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): boolean {
  const convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)
  return (
    convertedDateLeft.getFullYear() === convertedDateRight.getFullYear() &&
    convertedDateLeft.getMonth() === convertedDateRight.getMonth()
  )
}
