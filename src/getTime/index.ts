import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
export default function getTime(date: Date | number): number {
  requiredArgs(1, arguments)

  if (date instanceof Date) {
    return date.getTime()
  } else if (typeof date === 'number') {
    return date
  }

  return NaN
}
