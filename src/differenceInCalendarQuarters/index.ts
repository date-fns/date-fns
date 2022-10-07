import getQuarter from '../getQuarter/index'
import toDate from '../toDate/index'

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
export default function differenceInCalendarQuarters<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): number {
  const convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)

  const yearDiff =
    convertedDateLeft.getFullYear() - convertedDateRight.getFullYear()
  const quarterDiff =
    getQuarter(convertedDateLeft) - getQuarter(convertedDateRight)

  return yearDiff * 4 + quarterDiff
}
