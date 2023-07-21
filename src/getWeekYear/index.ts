import dateFrom from '../constructFrom/index'
import startOfWeek from '../startOfWeek/index'
import toDate from '../toDate/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../types'
import { getDefaultOptions } from '../_lib/defaultOptions/index'

/**
 * The {@link getWeekYear} function options.
 */
export interface GetWeekYearOptions
  extends LocaleOptions,
    WeekStartOptions,
    FirstWeekContainsDateOptions {}

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
export default function getWeekYear<DateType extends Date>(
  dirtyDate: DateType | number,
  options?: GetWeekYearOptions
): number {
  const date = toDate(dirtyDate)
  const year = date.getFullYear()

  const defaultOptions = getDefaultOptions()
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1

  const firstWeekOfNextYear = dateFrom(dirtyDate, 0)
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setHours(0, 0, 0, 0)
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options)

  const firstWeekOfThisYear = dateFrom(dirtyDate, 0)
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setHours(0, 0, 0, 0)
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
