/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date. The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
export default function endOfDay(date: Date | number): Date {
  const result = new Date(date)
  result.setHours(23, 59, 59, 999)
  return result
}
