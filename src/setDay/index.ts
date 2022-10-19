import addDays from '../addDays/index'
import toDate from '../toDate/index'
import type { LocaleOptions, WeekStartOptions } from '../types'
import { getDefaultOptions } from '../_lib/defaultOptions/index'
import type { ReadonlyDate } from '../types'

/**
 * The {@link setDay} function options.
 */
export interface SetDayOptions extends LocaleOptions, WeekStartOptions {}

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
export default function setDay<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number,
  day: number,
  options?: SetDayOptions
): DateType {
  const defaultOptions = getDefaultOptions()
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0

  const date = toDate(dirtyDate)
  const currentDay = date.getDay()

  const remainder = day % 7
  const dayIndex = (remainder + 7) % 7

  const delta = 7 - weekStartsOn
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7)
  return addDays(date, diff)
}
