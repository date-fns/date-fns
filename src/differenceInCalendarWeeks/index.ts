import { millisecondsInWeek } from '../constants/index'
import startOfWeek from '../startOfWeek/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'

/**
 * The {@link differenceInCalendarWeeks} function options.
 */
export interface DifferenceInCalendarWeeksOptions
  extends LocaleOptions,
    WeekStartOptions {}

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of calendar weeks
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
export default function differenceInCalendarWeeks<DateType extends Date>(
  dirtyDateLeft: DateType | number,
  dirtyDateRight: DateType | number,
  options?: DifferenceInCalendarWeeksOptions
): number {
  const startOfWeekLeft = startOfWeek(dirtyDateLeft, options)
  const startOfWeekRight = startOfWeek(dirtyDateRight, options)

  const timestampLeft =
    startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft)
  const timestampRight =
    startOfWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfWeekRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / millisecondsInWeek)
}
