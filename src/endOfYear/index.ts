import toDate from '../toDate/index'

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
export default function endOfYear<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  const year = convertedDate.getFullYear()
  convertedDate.setFullYear(year + 1, 0, 0)
  convertedDate.setHours(23, 59, 59, 999)
  return convertedDate
}
