import constructFrom from '../constructFrom/index'
import isSaturday from '../isSaturday/index'
import isSunday from '../isSunday/index'
import isWeekend from '../isWeekend/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'
import toDate from '../toDate'
import isSameDay from '../isSameDay/index'
import isAfter from '../isAfter/index'
import isBefore from '../isBefore/index'

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
 * @param {Record<string, boolean>} [options.exceptions={}] - exceptions to the business days. Map of date string to boolean.
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
    exceptions?: Record<string, boolean>
  }
): Date {
  requiredArgs(2, arguments)
  const options = dirtyOptions || {}
  const exceptions = options.exceptions || {}
  const businessDays =
    options.businessDays == null
      ? [1, 2, 3, 4, 5]
      : options.businessDays.filter((number) => number < 7).map(toInteger)

  const initialDate = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)
  let accountedForExceptions = 0

  const isExcepted = (date: Date): boolean | null => {
    if (options.exceptions) {
      const exception =
        Object.keys(exceptions).find((e) => isSameDay(new Date(e), date)) || ''
      if (exceptions[exception] === true) {
        accountedForExceptions -= 1
      } else if (exceptions[exception] === false) {
        accountedForExceptions += 1
      }
      return exceptions[exception]
    }
    return null
  }

  const isWorkingDay = (date: Date) => {
    const hasException = isExcepted(date)
    if (hasException === false) return false
    if (hasException === true || businessDays.includes(date.getDay())) {
      return true
    }
    return false
  }

  if (isNaN(amount)) return constructFrom(dirtyDate, NaN)

  if (initialDate.toString() === 'Invalid Date') {
    return initialDate
  }

  // We need to call this to add the initial date to the accountedForExceptions
  isExcepted(initialDate)
  const startedOnNonBusinessDay = !businessDays.includes(initialDate.getDay())
  const hours = initialDate.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = toInteger(amount / businessDays.length)

  let newDate = new Date(initialDate)
  newDate.setDate(newDate.getDate() + fullWeeks * 7)

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % businessDays.length)

  // Loops over remaining days
  while (restDays > 0) {
    newDate.setDate(newDate.getDate() + sign)
    if (isWorkingDay(newDate)) restDays -= 1
  }

  // Filter exceptions to make sure they're enabling/disabling valid days
  const filterExceptions = (exceptionString: string) => {
    const exceptionDate = new Date(exceptionString)
    const [earlierDate, laterDate] =
      sign === 1 ? [dirtyDate, newDate] : [newDate, dirtyDate]
    // Valid exceptions must be between the start date and calculated date,
    // or equal to the start date or calculated date
    if (
      (isBefore(exceptionDate, laterDate) &&
        isAfter(exceptionDate, earlierDate)) ||
      isSameDay(exceptionDate, laterDate) ||
      isSameDay(exceptionDate, earlierDate)
    ) {
      // Valid `true` exceptions enable a non-business day
      // Valid `false` exceptions disable a business day
      if (
        exceptions[exceptionString] ===
        !businessDays.includes(exceptionDate.getDay())
      ) {
        return true
      }
    }
    return false
  }

  // Count the overall delta of working days due to exceptions
  const validExceptions = Object.keys(exceptions).filter(filterExceptions)

  let dayChangesDueToExceptions =
    validExceptions.reduce((businessDaysDelta, exceptionString) => {
      switch (exceptions[exceptionString]) {
        case true:
          return businessDaysDelta - sign
        case false:
          return businessDaysDelta + sign
        default:
          return businessDaysDelta
      }
    }, 0) - accountedForExceptions

  // Add or subtract days until we have applied all our exceptions
  while (dayChangesDueToExceptions !== 0) {
    const deltaSign = dayChangesDueToExceptions < 0 ? -1 : 1
    if (isWorkingDay(newDate) || isExcepted(newDate) === false) {
      dayChangesDueToExceptions = dayChangesDueToExceptions - deltaSign
      // don't add to newDate if the last day is a false exception
      if (dayChangesDueToExceptions === 0 && isExcepted(newDate) === false)
        break
    }
    newDate.setDate(newDate.getDate() + deltaSign)
  }

  // If we land on a non-working date, we add days accordingly to land on the next business day
  const reduceIfNonWorkingDay = (date: Date) => {
    if (!isWorkingDay(date) && amount !== 0) {
      const newSign = startedOnNonBusinessDay ? -sign : sign
      // If we're adding days, add a day until we reach a business day
      // If we're subtracting days, subtract a day until we reach a business day
      date.setDate(date.getDate() + newSign)
      reduceIfNonWorkingDay(date)
    }
  }

  reduceIfNonWorkingDay(newDate)

  // Restore hours to avoid DST lag
  newDate.setHours(hours)

  return newDate
}
