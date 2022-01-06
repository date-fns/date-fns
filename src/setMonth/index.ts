import getDaysInMonth from '../getDaysInMonth/index'

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param date - the date to be changed
 * @param month - the month of the new date
 * @returns the new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
export default function setMonth(date: Date | number, month: number): Date {
  const result = new Date(date)
  const resultMonth = Math.trunc(month)
  const year = result.getFullYear()
  const day = result.getDate()

  const dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, resultMonth, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  result.setMonth(resultMonth, Math.min(day, daysInMonth))
  return result
}
