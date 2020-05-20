import startOfWeek from '../startOfWeek/index.js'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index.js'
import { WeekFnOptions } from '../_types/Options/index.js'

const MILLISECONDS_IN_WEEK = 604800000

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - The options object
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
export default function differenceInCalendarWeeks(
  dateLeft: Date | number,
  dateRight: Date | number,
  options?: WeekFnOptions
) {
  const startOfWeekLeft = startOfWeek(dateLeft, options)
  const startOfWeekRight = startOfWeek(dateRight, options)

  const timestampLeft =
    startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft)
  const timestampRight =
    startOfWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfWeekRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}
