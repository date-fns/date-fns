import addDays from '../addDays/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import isAfter from '../isAfter/index'
import isBefore from '../isBefore/index'
import isSameDay from '../isSameDay/index'
import isValid from '../isValid/index'
import toDate from '../toDate/index'

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *

 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Number[]} [options.businessDays=[1, 2, 3, 4, 5]] - the business days. default is Monday to Friday.
 * @param {Record<string, boolean>} [options.exceptions={}] - exceptions to the business days. Map of date string (with format "MM/DD/YY") to boolean.
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} businessDays cannot include numbers greater than 6
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
export default function differenceInBusinessDays(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  dirtyOptions?: {
    businessDays?: number[]
    exceptions?: Record<string, boolean>
  }
): number {
  const options = dirtyOptions || {}
  const businessDays = options.businessDays || [1, 2, 3, 4, 5]

  // Throw a RangeError if businessDays includes a number greater than 6
  if (businessDays?.filter((number) => number > 6).length > 0) {
    throw new RangeError('business days must be between 0 and 6')
  }

  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)
  const isHoliday = (date: Date) => !businessDays.includes(date.getDay())

  if (!isValid(dateLeft) || !isValid(dateRight)) return NaN

  const calendarDifference = differenceInCalendarDays(dateLeft, dateRight)
  const sign = calendarDifference < 0 ? -1 : 1

  const isInDateBounds = (date: Date) => {
    return sign > 0
      ? isBefore(date, dateLeft) && isAfter(date, dateRight)
      : isAfter(date, dateLeft) && isBefore(date, dateRight)
  }

  const weeks = Math.trunc(calendarDifference / 7)

  let result = weeks * businessDays.length
  let newDateRight = addDays(dateRight, weeks * 7)

  // the loop below will run at most 6 times to account for the remaining days that don't make up a full week
  while (!isSameDay(dateLeft, newDateRight)) {
    // sign is used to account for both negative and positive differences
    result += isHoliday(newDateRight) ? 0 : sign
    newDateRight = addDays(newDateRight, sign)
  }

  // handle exceptions
  let exceptionCount = 0
  if (options.exceptions) {
    const exceptionDates = Object.keys(options.exceptions)
    exceptionDates.forEach((e) => {
      const date = new Date(e)
      if (!isValid(date)) return
      // if date is within the left and right dates
      if (isInDateBounds(date)) {
        if (
          // if exception is true and date is not a business day
          options.exceptions![e] === true &&
          !businessDays.includes(date.getDay())
        ) {
          // add a day
          exceptionCount += sign
        } else if (
          // if exception is false and date is a business day
          options.exceptions![e] === false &&
          businessDays.includes(date.getDay())
        ) {
          // subtract a day
          exceptionCount -= sign
        }
      }
    })
    // handle exceptions for dateLeft and dateRight
    // if both are true, add one; if both are false, add two; do nothing in all other cases
    const leftAndRightExceptions = exceptionDates.filter((e) => {
      const date = new Date(e)
      return isSameDay(date, dateLeft) || isSameDay(date, dateRight)
    })
    if (leftAndRightExceptions.length === 2) {
      if (
        leftAndRightExceptions.every((e) => options.exceptions![e] === true)
      ) {
        exceptionCount++
      } else if (
        leftAndRightExceptions.every((e) => options.exceptions![e] === false)
      ) {
        exceptionCount--
      }
    }
  }

  return result + exceptionCount
}
