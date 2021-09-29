import toDate from '../toDate/index'
import setMonth from '../setMonth/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'
import type { DateValues } from '../types'

/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @param date - the date to be changed
 * @param values - an object with options
 * @returns the new date with options set
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

export default function set(
  dirtyDate: Date | number,
  values: DateValues
): Date {
  requiredArgs(2, arguments)

  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object')
  }

  let date = toDate(dirtyDate)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return new Date(NaN)
  }

  if (values.year != null) {
    date.setFullYear(values.year)
  }

  if (values.month != null) {
    date = setMonth(date, values.month)
  }

  if (values.date != null) {
    date.setDate(toInteger(values.date))
  }

  if (values.hours != null) {
    date.setHours(toInteger(values.hours))
  }

  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes))
  }

  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds))
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds))
  }

  return date
}
