import toDate from '../toDate/index.js'
import setMonth from '../setMonth/index.js'
import { DateValues } from '../types.js'

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
 * @param values - The options object
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
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

export default function set(dirtyDate: Date | number, values: DateValues) {
  let date = toDate(dirtyDate)

  if (typeof values.year === 'number') {
    date.setFullYear(values.year)
  }

  if (typeof values.month === 'number') {
    date = setMonth(date, values.month)
  }

  if (typeof values.date === 'number') {
    date.setDate(values.date)
  }

  if (typeof values.hours === 'number') {
    date.setHours(values.hours)
  }

  if (typeof values.minutes === 'number') {
    date.setMinutes(values.minutes)
  }

  if (typeof values.seconds === 'number') {
    date.setSeconds(values.seconds)
  }

  if (typeof values.milliseconds === 'number') {
    date.setMilliseconds(values.milliseconds)
  }

  return date
}
