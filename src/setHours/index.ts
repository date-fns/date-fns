import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
export default function setHours(
  dirtyDate: Date | number,
  dirtyHours: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const hours = toInteger(dirtyHours)
  date.setHours(hours)
  return date
}
