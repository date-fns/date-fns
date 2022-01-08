import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
export default function setMinutes(
  dirtyDate: Date | number,
  dirtyMinutes: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const minutes = toInteger(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}
