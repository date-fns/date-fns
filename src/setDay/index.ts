import addDays from '../addDays/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import toInteger from '../_lib/toInteger/index'

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param date - the date to be changed
 * @param day - the day of the week of the new date
 * @param options - an object with options.
 * @returns the new date with the day of the week set
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setDay(
  date: Date | number,
  day: number,
  options?: WeekStartOptions & LocaleOptions
): Date {
  const opts = options || {}
  const locale = opts.locale
  const localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  const defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  const weekStartsOn =
    opts.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(opts.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  const dateTransformed = new Date(date)
  const dayTransformed = Math.trunc(day)
  const currentDay = dateTransformed.getDay()

  const remainder = dayTransformed % 7
  const dayIndex = (remainder + 7) % 7

  const delta = 7 - weekStartsOn
  const diff =
    dayTransformed < 0 || dayTransformed > 6
      ? dayTransformed - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7)
  return addDays(dateTransformed, diff)
}
