import startOfISOWeekYear from '../startOfISOWeekYear/index'
import addWeeks from '../addWeeks/index'

const MILLISECONDS_IN_WEEK = 604800000

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
 * getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
export default function getISOWeeksInYear(date: Date | number): number {
  const thisYear = startOfISOWeekYear(date)
  const nextYear = startOfISOWeekYear(addWeeks(thisYear, 60))
  const diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}
