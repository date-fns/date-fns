import constructFrom from '../constructFrom/index'
import getWeekYear from '../getWeekYear/index'
import startOfWeek from '../startOfWeek/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../types'
import { getDefaultOptions } from '../_lib/defaultOptions/index'

/**
 * The {@link startOfWeekYear} function options.
 */
export interface StartOfWeekYearOptions
  extends LocaleOptions,
    FirstWeekContainsDateOptions,
    WeekStartOptions {}

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param date - the original date
 * @param options - an object with options.
 * @returns the start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
export default function startOfWeekYear<DateType extends Date>(
  dirtyDate: DateType | number,
  options?: StartOfWeekYearOptions
): DateType {
  const defaultOptions = getDefaultOptions()
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1

  const year = getWeekYear(dirtyDate, options)
  const firstWeek = constructFrom(dirtyDate, 0)
  firstWeek.setFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  const date = startOfWeek<DateType>(firstWeek, options)
  return date
}
