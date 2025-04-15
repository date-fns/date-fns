import { isLeapYear } from '../isLeapYear/index.js'
import { toDate } from '../toDate/index.js'
import type { ContextOptions, DateArg } from '../types.js'

export interface IsLeapDecadeOptions extends ContextOptions<Date> {}

/**
 * @name isLeapDecade
 * @category Decade Helpers
 * @summary Check if a decade contains at least 3 leap years.
 *
 * @description
 * Given a year, this function checks if the decade that year belongs to
 * has at least 3 leap years.
 *
 * Leap years are calculated using the existing isLeapYear utility.
 *
 * @param date - the given date
 * @param options - The options object
 * @returns true if the decade has 3 or more leap years, false otherwise
 *
 * @example
 * // Is the 1990s a leap decade?
 * const result = isLeapDecade(new Date(1995, 0, 1))
 * //=> false
 */
export default function isLeapDecade(
  date: DateArg<Date>,
  options?: IsLeapDecadeOptions,
): boolean {
  const targetDate = toDate(date, options?.in)
  if (isNaN(targetDate.getTime())) return false

  const year = targetDate.getFullYear()
  const decadeStart = Math.floor(year / 10) * 10
  const decadeEnd = decadeStart + 9

  let leapCount = 0
  for (let y = decadeStart; y <= decadeEnd; y++) {
    if (isLeapYear(new Date(y, 0, 1))) {
      leapCount++
    }
  }

  return leapCount >= 3
}
