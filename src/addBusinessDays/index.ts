import isWeekend from '../isWeekend/index'
import trunc from '../_lib/trunc'

/**
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added
 * @returns The new date with the business days added
 *
 * @example
 * Add 10 business days to 1 September 2014:
 * ```ts
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 * ```
 *
 * @category Day Helpers
 */
export default function addBusinessDays(
  dirtyDate: Date | number,
  amount: number
): Date {
  const date = new Date(dirtyDate)

  if (isNaN(amount)) return new Date(NaN)

  const hours = date.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = trunc(amount / 5)

  date.setDate(date.getDate() + fullWeeks * 7)

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5)

  // Loops over remaining days
  while (restDays > 0) {
    date.setDate(date.getDate() + sign)
    if (!isWeekend(date)) restDays -= 1
  }

  // Restore hours to avoid DST lag
  date.setHours(hours)

  return date
}
