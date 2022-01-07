import getISOWeekYear from '../getISOWeekYear/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years to one date from another.
 *
 * @description
 * Get the number of calendar ISO week-numbering years to one date from another.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInCalendarISOYears` to `differenceInCalendarISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateTo - the target date
 * @param {Date|Number} dateFrom - the start date
 * @returns {Number} the number of calendar ISO week-numbering years from dateFrom to dateTo
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
export default function differenceInCalendarISOWeekYears(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  requiredArgs(2, arguments)

  return getISOWeekYear(dirtyDateLeft) - getISOWeekYear(dirtyDateRight)
}
