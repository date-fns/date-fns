import getDate from '../getDate/index'
import getDay from '../getDay/index'
import startOfMonth from '../startOfMonth/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import { getDefaultOptions } from '../_lib/defaultOptions/index'
import type { ReadonlyDate } from '../types'

/**
 * The {@link getWeekOfMonth} function options.
 */
export interface GetWeekOfMonthOptions
  extends LocaleOptions,
    WeekStartOptions {}

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
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth<DateType extends Date>(
  date: ReadonlyDate<DateType> | number,
  options?: GetWeekOfMonthOptions
): number {
  const defaultOptions = getDefaultOptions()
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0

  const currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) return NaN

  const startWeekDay = getDay(startOfMonth(date))

  let lastDayOfFirstWeek = weekStartsOn - startWeekDay
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7

  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1
}
