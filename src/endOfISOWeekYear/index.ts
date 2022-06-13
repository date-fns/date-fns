import getISOWeekYear from '../getISOWeekYear/index'
import startOfISOWeek from '../startOfISOWeek/index'
import constructFrom from '../constructFrom/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
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
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
export default function endOfISOWeekYear<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  requiredArgs(1, arguments)

  const year = getISOWeekYear(dirtyDate)
  const fourthOfJanuaryOfNextYear = constructFrom(dirtyDate, 0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  const date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}
