import startOfWeek from '../startOfWeek/index'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'
import requiredArgs from '../_lib/requiredArgs/index'
import { LocaleOptions, WeekStartOptions } from '../types'

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
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of calendar weeks
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
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
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  dirtyOptions?: LocaleOptions & WeekStartOptions
): number {
  requiredArgs(2, arguments)

  const startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  const startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

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
