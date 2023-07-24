import toDate from '../toDate/index'

/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * @param date - the original date
 * @returns the end of a decade
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */
export default function endOfDecade<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  const year = convertedDate.getFullYear()
  const decade = 9 + Math.floor(year / 10) * 10
  convertedDate.setFullYear(decade, 11, 31)
  convertedDate.setHours(23, 59, 59, 999)
  return convertedDate
}
