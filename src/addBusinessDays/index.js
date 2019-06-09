import toInteger from '../_lib/toInteger/index.js'
import isWeekend from '../isWeekend/index.js'
import toDate from '../toDate/index.js'

/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of weekdays (mo - fri) to the given date, ignoring weekends.
 *
 * @description
 * Add the specified number of weekdays (mo - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weekdays to be added
 * @returns {Date} the new date with the weekdays added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 weekdays to 1 September 2014:
 * var result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
export default function addBusinessDays(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)
  var amount = toInteger(dirtyAmount)

  if (isNaN(amount)) return new Date(NaN)

  var numWeekDays = 0
  while (numWeekDays < amount) {
    date.setDate(date.getDate() + 1)
    if (!isWeekend(date)) numWeekDays++
  }

  return date
}
