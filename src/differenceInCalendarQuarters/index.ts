import getQuarter from '../getQuarter/index'

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
export default function differenceInCalendarQuarters(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  const dateLeftTransformed = new Date(dateLeft)
  const dateRightTransformed = new Date(dateRight)

  const yearDiff =
    dateLeftTransformed.getFullYear() - dateRightTransformed.getFullYear()
  const quarterDiff =
    getQuarter(dateLeftTransformed) - getQuarter(dateRightTransformed)

  return yearDiff * 4 + quarterDiff
}
