/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param date - the given date
 * @returns the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export default function getDaysInMonth(date: Date | number): number {
  const dateTransformed = new Date(date)
  const year = dateTransformed.getFullYear()
  const monthIndex = dateTransformed.getMonth()
  const lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}
