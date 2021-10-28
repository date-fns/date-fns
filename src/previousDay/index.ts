import getDay from '../getDay/index'
import subDays from '../subDays/index'
import type { Day } from '../types'

/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param date - the date to check
 * @param day - day of the week
 * @returns the date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
export default function previousDay(date: Date | number, day: Day): Date {
  let delta = getDay(date) - day
  if (delta <= 0) delta += 7

  return subDays(date, delta)
}
