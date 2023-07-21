import { millisecondsInWeek } from '../constants/index'
import startOfISOWeek from '../startOfISOWeek/index'
import startOfISOWeekYear from '../startOfISOWeekYear/index'
import toDate from '../toDate/index'

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
export default function getISOWeek<DateType extends Date>(
  date: DateType | number
): number {
  const _date = toDate(date)
  const diff =
    startOfISOWeek(_date).getTime() - startOfISOWeekYear(_date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / millisecondsInWeek) + 1
}
