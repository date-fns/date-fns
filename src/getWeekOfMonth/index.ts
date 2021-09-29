import getDate from '../getDate/index'
import getDay from '../getDay/index'
import startOfMonth from '../startOfMonth/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the week of month
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
): number {
  requiredArgs(1, arguments)

  const defaultWeekStartsOn = options?.locale?.options?.weekStartsOn || 0

  const weekStartsOn =
    options?.weekStartsOn == null
      ? toInteger(defaultWeekStartsOn)
      : toInteger(options.weekStartsOn)

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  const currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) return NaN

  const startWeekDay = getDay(startOfMonth(date))

  let lastDayOfFirstWeek = weekStartsOn - startWeekDay
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7

  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1
}
