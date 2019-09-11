import isWeekend from '../isWeekend/index.js'
import toDate from '../toDate/index.js'
import toInteger from '../_lib/toInteger/index.js'

/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
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

  var hours = date.getHours()
  var sign = amount < 0 ? -1 : 1

  date.setDate(date.getDate() + toInteger(amount / 5) * 7)
  amount %= 5 // to get remaining days not part of a full week

  // only loops over remaining days or if day is a weekend, ensures a business day is returned
  while (amount || isWeekend(date)) {
    date.setDate(date.getDate() + sign)
    if (!isWeekend(date)) amount -= sign
  }

  date.setHours(hours)
  return date
}
