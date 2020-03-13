import isWeekend from '../isWeekend/index.js'
import toDate from '../toDate/index.js'
import toInteger from '../_lib/toInteger/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'

/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * var result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
export default function addBusinessDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)

  if (isNaN(amount)) return new Date(NaN)

  const hours = date.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = toInteger(amount / 5)

  date.setDate(date.getDate() + fullWeeks * 7)

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5)

  // Loops over remaining days
  while (restDays > 0) {
    date.setDate(date.getDate() + sign)
    if (!isWeekend(date)) restDays -= 1
  }

  // Restore hours to avoid DST lag
  date.setHours(hours)

  return date
}
