import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import startOfISOWeekYear from '../startOfISOWeekYear/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `setISOYear` to `setISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
export default function setISOWeekYear(dirtyDate: Date | number, dirtyISOWeekYear: number): Date {
  requiredArgs(2, arguments)

  let date = toDate(dirtyDate)
  const isoWeekYear = toInteger(dirtyISOWeekYear)
  const diff = differenceInCalendarDays(date, startOfISOWeekYear(date))
  const fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOWeekYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}
