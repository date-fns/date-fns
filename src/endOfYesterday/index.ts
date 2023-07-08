/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
export default function endOfYesterday(): Date {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDate()

  const date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}
