import toDate from '../toDate/index.js'
import setMonth from '../setMonth/index.js'
import toInteger from '../_lib/toInteger/index.js'
import { DateValues } from 'src/types.js'

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
 * @param date - The date to be changed
 * @param values - An object with options
 * @param [values.year] - The number of years to be set
 * @param [values.month] - The number of months to be set
 * @param [values.date] - The number of days to be set
 * @param [values.hours] - The number of hours to be set
 * @param [values.minutes] - The number of minutes to be set
 * @param [values.seconds] - The number of seconds to be set
 * @param [values.milliseconds] - The number of milliseconds to be set
 * @returns The new date with options set
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * var result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * var result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

export default function set(dirtyDate: Date | number, values: DateValues) {
  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object')
  }

  var date = toDate(dirtyDate)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
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
