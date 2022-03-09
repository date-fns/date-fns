import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'
import isSameDay from '../isSameDay/index'

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
 * @param {Record<string, boolean>} [options.exceptions={}] - exceptions to the business days. Map of date string to boolean.
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
  requiredArgs(2, arguments)
  const options = dirtyOptions || {}
  const exceptions = options.exceptions || {}
  const businessDays = options.businessDays ?? [1, 2, 3, 4, 5]

  // Throw an exception if businessDays includes a number greater than 6
  if (businessDays?.filter((number) => number > 6).length > 0) {
    throw new RangeError('business days must be between 0 and 6')
  }

  const initialDate = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)

  if (isNaN(amount)) return new Date(NaN)

  if (initialDate.toString() === 'Invalid Date') {
    return initialDate
  }

  // returns true or false if the date has an exception, else null
  const findException = (date: Date): boolean | null => {
    if (options.exceptions) {
      const exceptionDate =
        Object.keys(exceptions).find((e) => isSameDay(new Date(e), date)) || ''
      return exceptions[exceptionDate]
    }
    return null
  }

  const isWorkingDay = (date: Date) => {
    const isDateIncluded = findException(date)
    if (isDateIncluded === false) return false
    if (isDateIncluded === true || businessDays.includes(date.getDay())) {
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
