/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * const result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
export default function lastDayOfYear(date: Date | number): Date {
  const dateTransformed = new Date(date)
  const year = dateTransformed.getFullYear()
  dateTransformed.setFullYear(year + 1, 0, 0)
  dateTransformed.setHours(0, 0, 0, 0)
  return dateTransformed
}
