import addDays from '../addDays/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import isSameDay from '../isSameDay/index'
import isValid from '../isValid/index'
import isWeekend from '../isWeekend/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import toInteger from '../_lib/toInteger/index'

export type DifferenceInBusinessDaysOptions = {
  includeEndDate?: boolean
  includeStartDate?: boolean
}

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business days (Monday - Friday) between the given dates.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 * By default, the start date is included but the end date is not.
 *
 * @param {Date|Number} endDate - the end date, usually later (excluded by default)
 * @param {Date|Number} startDate - the start date, usually earlier (included by default)
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeEndDate=false] - should the end date be included in the calculation?
 * @param {Boolean} [options.includeStartDate=true] - should the start date be included in the calculation?
 * @returns {Number} the number of business days, or `NaN` if one or both given dates are not valid
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // What is the difference in business days between a Sunday and the following Wednesday?
 * // - Sunday is skipped (start date and weekend)
 * // - Monday and Tuesday are counted
 * // - Wednesday is not counted (end date)
 * differenceInBusinessDays(
 *   new Date(2022, 0, 19), // Wed
 *   new Date(2022, 0, 16), // Sun
 * )
 * //=> 2
 *
 * @example
 * // What is the difference in business days between a Wednesday and the previous Friday?
 * // - Wednesday is counted (start date)
 * // - Tuesday and Monday are counted
 * // - Sunday and Saturday are skipped
 * // - Friday is not counted (end date)
 * differenceInBusinessDays(
 *   new Date(2022, 0, 14), // Fri
 *   new Date(2022, 0, 19), // Wed
 * )
 * //=> -3
 *
 * @example
 * // What is the difference in business days between a business day (Monday - Friday) and itself?
 * differenceInBusinessDays(
 *   new Date(2022, 0, 19), // Wed
 *   new Date(2022, 0, 19), // Wed
 * )
 * //=> 0
 *
 * @example
 * // What is the difference in business days between a Friday and the following Wednesday
 * // if we change the options to exclude the start date and include the end date?
 * // - Friday is not counted (start date)
 * // - Saturday and Sunday are skipped
 * // - Monday and Tuesday are counted
 * // - Wednesday is also counted (end date)
 * differenceInBusinessDays(
 *   new Date(2022, 0, 19), // Wed
 *   new Date(2022, 0, 14), // Fri
 *   { includeStartDate: false, includeEndDate: true },
 * )
 * //=> 3
 */
export default function differenceInBusinessDays(
  endDate: Date | number,
  startDate: Date | number,
  options?: DifferenceInBusinessDaysOptions
): number {
  requiredArgs(2, arguments)

  const end = toDate(endDate)
  const start = toDate(startDate)

  if (!isValid(end) || !isValid(start)) return NaN

  const { includeStartDate = true, includeEndDate = false } = options || {}

  if (isSameDay(end, start)) {
    return includeStartDate && includeEndDate && !isWeekend(end) ? 1 : 0
  }

  const calendarDifference = differenceInCalendarDays(end, start)
  const sign = calendarDifference < 0 ? -1 : 1

  const weeks = toInteger(calendarDifference / 7)

  let result = weeks * 5
  let startCursor = addDays(start, weeks * 7)

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!isSameDay(end, startCursor)) {
    // sign is used to account for both negative and positive differences
    result += isWeekend(startCursor) ? 0 : sign
    startCursor = addDays(startCursor, sign)
  }

  if (!includeStartDate && !isWeekend(start)) result -= sign
  if (includeEndDate && !isWeekend(end)) result += sign

  return result
}
