import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */
export default function lastDayOfDecade<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const decade = 9 + Math.floor(year / 10) * 10
  date.setFullYear(decade + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
