import toDate from '../toDate/index'

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
export default function endOfMonth<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  const month = convertedDate.getMonth()
  convertedDate.setFullYear(convertedDate.getFullYear(), month + 1, 0)
  convertedDate.setHours(23, 59, 59, 999)
  return convertedDate
}
