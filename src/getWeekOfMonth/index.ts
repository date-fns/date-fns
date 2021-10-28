import getDate from '../getDate/index'
import getDay from '../getDay/index'
import startOfMonth from '../startOfMonth/index'
import type { LocaleOptions, WeekStartOptions } from '../types'

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
 * getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
) {
  var locale = options?.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : localeWeekStartsOn
  var weekStartsOn =
    options?.weekStartsOn == null ? defaultWeekStartsOn : options.weekStartsOn

  var currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth
  }

  var startWeekDay = getDay(startOfMonth(date))
  var lastDayOfFirstWeek = 0

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay
  }

  var weekNumber = 1

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7)
  }
  return weekNumber
}
