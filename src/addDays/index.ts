/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
export default function addDays(date: Date | number, amount: number): Date {
  const result = new Date(date)
  const days = Math.trunc(amount)

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!days) return result

  result.setDate(result.getDate() + days)
  return result
}
