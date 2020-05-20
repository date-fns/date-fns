import getWeekYear from '../getWeekYear/index.js'
import startOfWeek from '../startOfWeek/index.js'
import { WeekYearFnOptions } from 'src/types.js'

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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The original date
 * @param options - The options object
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
export default function startOfWeekYear(
  date: Date | number,
  options: WeekYearFnOptions = {}
) {
  const firstWeekContainsDate =
    options.firstWeekContainsDate ??
    options.locale?.options?.firstWeekContainsDate ??
    1

  const year = getWeekYear(date, options)
  const firstWeek = new Date(0)
  firstWeek.setFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  return startOfWeek(firstWeek, options)
}
