import toDate from '../toDate/index'

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
export default function differenceInCalendarMonths<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): number {
  const convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)

  const yearDiff =
    convertedDateLeft.getFullYear() - convertedDateRight.getFullYear()
  const monthDiff = convertedDateLeft.getMonth() - convertedDateRight.getMonth()

  return yearDiff * 12 + monthDiff
}
