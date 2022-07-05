import { getDefaultOptions } from '../_lib/defaultOptions/index'
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
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6 inclusively
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

  const defaultOptions = getDefaultOptions()
  const weekStartsOn = toInteger(
    options?.weekStartsOn ??
      options?.locale?.options?.weekStartsOn ??
      defaultOptions.weekStartsOn ??
      defaultOptions.locale?.options?.weekStartsOn ??
      0
  )

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
