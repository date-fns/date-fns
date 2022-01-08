/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
export default function endOfQuarter(date: Date | number): Date {
  const result = new Date(date)
  const currentMonth = result.getMonth()
  const month = currentMonth - (currentMonth % 3) + 3
  result.setMonth(month, 0)
  result.setHours(23, 59, 59, 999)
  return result
}
