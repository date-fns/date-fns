import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
export default function getMilliseconds<DateType extends Date>(
  dirtyDate: DateType | number
): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const milliseconds = date.getMilliseconds()
  return milliseconds
}
