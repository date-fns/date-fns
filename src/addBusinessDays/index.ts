import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'

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
 * @param {Object} [options] - an object with options.
 * @param {Number[]} [options.businessDays=[1, 2, 3, 4, 5]] - the business days. default is Monday to Friday.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
export default function addBusinessDays(
  dirtyDate: Date | number,
  dirtyAmount: number,
  dirtyOptions?: {
    businessDays?: number[]
  }
): Date {
  requiredArgs(2, arguments)
  const options = dirtyOptions || {}
  const businessDays =
    options.businessDays == null
      ? [1, 2, 3, 4, 5]
      : options.businessDays.map(toInteger)

  const date = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)
  const isHoliday = (date: Date) => !businessDays.includes(date.getDay())
  const startedOnHoliday = isHoliday(date)

  if (isNaN(amount)) return new Date(NaN)

  if (date.toString() === 'Invalid Date') {
    return date
  }

  const hours = date.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = toInteger(amount / businessDays.length)
  date.setDate(date.getDate() + fullWeeks * 7)

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % businessDays.length)

  // Loops over remaining days
  while (restDays > 0) {
    date.setDate(date.getDate() + sign)
    if (!isHoliday(date)) restDays -= 1
  }

  // If the date is a holiday and we reduce a dividable of
  // certain days (say 5 when holidays are Saturday and Sunday) from it, we land on a holiday date.
  // To counter this, we add days accordingly to land on the next business day
  const reduceIfHoliday = (date: Date) => {
    if (startedOnHoliday && isHoliday(date) && amount !== 0) {
      // If we're reducing days, we want to add days until we land on a business day
      // If we're adding days we want to reduce days until we land on a business day
      date.setDate(date.getDate() + (sign < 0 ? 1 : -1))
      reduceIfHoliday(date)
    }
  }
  reduceIfHoliday(date)

  // Restore hours to avoid DST lag
  date.setHours(hours)

  return date
}
