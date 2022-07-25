import getISOWeekYear from '../getISOWeekYear/index'
import startOfISOWeek from '../startOfISOWeek/index'
import constructFrom from '../constructFrom/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
export default function lastDayOfISOWeekYear<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  requiredArgs(1, arguments)

  const year = getISOWeekYear(dirtyDate)
  const fourthOfJanuary = constructFrom(dirtyDate, 0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  const date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}
