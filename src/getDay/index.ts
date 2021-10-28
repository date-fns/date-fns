import { Day } from '../types'

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - the given date
 * @returns the day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * getDay(new Date(2012, 1, 29))
 * //=> 3
 */
export default function getDay(date: Date | number): Day {
  return new Date(date).getDay() as Day
}
