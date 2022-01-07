import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'
import startOfISOWeek from '../startOfISOWeek/index'
import requiredArgs from '../_lib/requiredArgs/index'

const MILLISECONDS_IN_WEEK = 604800000

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks to one date from another.
 *
 * @description
 * Get the number of calendar ISO weeks to one date from another.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateTo - the target date
 * @param {Date|Number} dateFrom - the start date
 * @returns {Number} the number of calendar ISO weeks from dateFrom to dateTo
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
export default function differenceInCalendarISOWeeks(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  requiredArgs(2, arguments)

  const startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  const startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  const timestampLeft =
    startOfISOWeekLeft.getTime() -
    getTimezoneOffsetInMilliseconds(startOfISOWeekLeft)
  const timestampRight =
    startOfISOWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfISOWeekRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}
