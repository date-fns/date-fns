import { millisecondsInDay } from '../constants/index'
import startOfDay from '../startOfDay/index'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
export default function differenceInCalendarDays<DateType extends Date>(
  dirtyDateLeft: DateType | number,
  dirtyDateRight: DateType | number
): number {
  const startOfDayLeft = startOfDay(dirtyDateLeft)
  const startOfDayRight = startOfDay(dirtyDateRight)

  const timestampLeft =
    startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft)
  const timestampRight =
    startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / millisecondsInDay)
}
