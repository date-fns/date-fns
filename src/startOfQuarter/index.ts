import toDate from '../toDate/index'

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
export default function startOfQuarter<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  const date = toDate(dirtyDate)
  const currentMonth = date.getMonth()
  const month = currentMonth - (currentMonth % 3)
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
