import addDays from '../addDays/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import isSameDay from '../isSameDay/index'
import isValid from '../isValid/index'
import isWeekend from '../isWeekend/index'

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of business days
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 1 November 2021 and 30 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 30)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> 22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
export default function differenceInBusinessDays(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  const dateLeftTransformed = new Date(dateLeft)
  let dateRightTransformed = new Date(dateRight)

  if (!isValid(dateLeftTransformed) || !isValid(dateRightTransformed))
    return NaN

  const calendarDifference = differenceInCalendarDays(
    dateLeftTransformed,
    dateRightTransformed
  )
  const sign = calendarDifference < 0 ? -1 : 1

  const weeks = Math.trunc(calendarDifference / 7)

  let result = weeks * 5
  dateRightTransformed = addDays(dateRightTransformed, weeks * 7)

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!isSameDay(dateLeftTransformed, dateRightTransformed)) {
    // sign is used to account for both negative and positive differences
    result += isWeekend(dateRightTransformed) ? 0 : sign
    dateRightTransformed = addDays(dateRightTransformed, sign)
  }

  return result === 0 ? 0 : result
}
