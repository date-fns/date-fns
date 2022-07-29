import constructFrom from '../constructFrom/index'
import setMonth from '../setMonth/index'
import toDate from '../toDate/index'
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
 * @param values.year - the number of years to be set
 * @param values.month - the number of months to be set
 * @param values.date - the number of days to be set
 * @param values.hours - the number of hours to be set
 * @param values.minutes - the number of minutes to be set
 * @param values.seconds - the number of seconds to be set
 * @param values.milliseconds - the number of milliseconds to be set
 * @returns the new date with options set
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

export default function set<DateType extends Date>(
  dirtyDate: DateType | number,
  values: DateValues
): DateType {
  let date = toDate(dirtyDate)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return constructFrom(dirtyDate, NaN)
  }

  if (values.year != null) {
    date.setFullYear(values.year)
  }

  if (values.month != null) {
    date = setMonth(date, values.month)
  }

  if (values.date != null) {
    date.setDate(values.date)
  }

  if (values.hours != null) {
    date.setHours(values.hours)
  }

  if (values.minutes != null) {
    date.setMinutes(values.minutes)
  }

  if (values.seconds != null) {
    date.setSeconds(values.seconds)
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(values.milliseconds)
  }

  return date
}
