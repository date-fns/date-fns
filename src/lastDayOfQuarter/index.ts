/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @param options - an object with options.
 * @returns the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function lastDayOfQuarter(date: Date | number): Date {
  const dateTransformed = new Date(date)
  const currentMonth = dateTransformed.getMonth()
  const month = currentMonth - (currentMonth % 3) + 3
  dateTransformed.setMonth(month, 0)
  dateTransformed.setHours(0, 0, 0, 0)
  return dateTransformed
}
