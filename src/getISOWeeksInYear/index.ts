import addWeeks from '../addWeeks/index'
import { millisecondsInWeek } from '../constants/index'
import startOfISOWeekYear from '../startOfISOWeekYear/index'

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the given date
 * @returns the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
export default function getISOWeeksInYear<DateType extends Date>(
  date: DateType | number
): number {
  const thisYear = startOfISOWeekYear(date)
  const nextYear = startOfISOWeekYear(addWeeks(thisYear, 60))
  const diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / millisecondsInWeek)
}
