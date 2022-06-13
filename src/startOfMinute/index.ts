import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
export default function startOfMinute<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setSeconds(0, 0)
  return date
}
