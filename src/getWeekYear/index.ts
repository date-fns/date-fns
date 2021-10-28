import startOfWeek from '../startOfWeek/index'
import {
  WeekStartOptions,
  LocaleOptions,
  FirstWeekContainsDateOptions,
} from '../types'

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
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
export default function getWeekYear(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): number {
  const dateClone = new Date(date)
  const year = dateClone.getFullYear()

  const localeFirstWeekContainsDate =
    options?.locale?.options?.firstWeekContainsDate
  const defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null ? 1 : localeFirstWeekContainsDate
  const firstWeekContainsDate =
    options?.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : options.firstWeekContainsDate

  const firstWeekOfNextYear = new Date(0)
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setHours(0, 0, 0, 0)
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options)

  const firstWeekOfThisYear = new Date(0)
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setHours(0, 0, 0, 0)
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options)

  if (dateClone.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (dateClone.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
