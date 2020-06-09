/**
 * Add the specified number of days to the given date.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added
 * @returns The new date with the days added
 *
 * @example
 * Add 10 days to 1 September 2014:
 * ```ts
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 * ```
 *
 * @category Day Helpers
 */
export default function addDays(dirtyDate: Date | number, amount: number) {
  const date = new Date(dirtyDate)
  if (amount === 0) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date
  }
  date.setDate(date.getDate() + amount)
  return date
}
