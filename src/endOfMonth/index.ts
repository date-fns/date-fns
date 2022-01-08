/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
export default function endOfMonth(date: Date | number): Date {
  const result = new Date(date)
  const month = result.getMonth()
  result.setFullYear(result.getFullYear(), month + 1, 0)
  result.setHours(23, 59, 59, 999)
  return result
}
