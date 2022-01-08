/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function lastDayOfMonth(date: Date | number): Date {
  const result = new Date(date)
  const month = result.getMonth()
  result.setFullYear(result.getFullYear(), month + 1, 0)
  result.setHours(0, 0, 0, 0)
  return result
}
