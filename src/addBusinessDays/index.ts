import toDate from '../toDate'
import format from '../format/index'


/**
 * @name addBusinessDays
 * @category Date Extension Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @param {Object} [options] - an object with options.
 * @param {Number[]} [options.businessDays=[1, 2, 3, 4, 5]] - the business days. default is Monday to Friday.
 * @param {Record<string, boolean>} [options.exceptions={}] - exceptions to the business days. Map of date string (with format "MM/DD/YY") to boolean.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} businessDays cannot include numbers greater than 6
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
    exceptions?: Record<string, boolean>
  }
): Date {
  const options = dirtyOptions || {}
  const exceptions = options.exceptions || {}
  const businessDays = options.businessDays || [1, 2, 3, 4, 5]

  // Throw a RangeError if businessDays includes a number greater than 6
  if (businessDays?.filter((number) => number > 6).length > 0) {
    throw new RangeError('business days must be between 0 and 6')
  }

  const initialDate = toDate(dirtyDate)

  const amount =
    dirtyAmount > 0 ? Math.floor(dirtyAmount) : Math.ceil(dirtyAmount)

  if (isNaN(amount)) return new Date(NaN)

  if (initialDate.toString() === 'Invalid Date') {
    return initialDate
  }

  // returns a boolean if the date has an exception
  // true means the date is a working day
  // false means the date is not a working day
  const findException = (date: Date): boolean | undefined => {
    return exceptions[format(date, 'MM/dd/yy')]
  }

  // returns true if the date is a business day (doesn't account for exceptions)
  const isBusinessDay = (date: Date): boolean =>
    businessDays.includes(date.getDay())

  // returns true if the date is a working day (accounts for exceptions)
  const isWorkingDay = (date: Date) => {
    const isDateIncluded = options.exceptions ? findException(date) : undefined
    if (isDateIncluded === false) return false
    if (isDateIncluded === true || isBusinessDay(date)) {
      return true
    }
    return false
  }

  let newDate = new Date(initialDate)
  const sign = amount < 0 ? -1 : 1

  // start on initial day and continue until we have gone through all the days
  let dayCounter = Math.abs(amount)
  while (dayCounter > 0) {
    newDate.setDate(newDate.getDate() + sign)
    if (isWorkingDay(newDate)) dayCounter -= 1
  }

  // If we land on a non-working date, we add/subtract days accordingly to land on the next business day
  const reduceIfNonWorkingDay = (date: Date) => {
    if (!isWorkingDay(date) && amount !== 0) {
      date.setDate(date.getDate() + sign)
      reduceIfNonWorkingDay(date)
    }
  }

  reduceIfNonWorkingDay(newDate)

  // Restore hours to avoid DST lag
  newDate.setHours(initialDate.getHours())

  return newDate
}
