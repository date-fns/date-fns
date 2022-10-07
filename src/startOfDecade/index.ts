import toDate from '../toDate/index'

/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @param date - the original date
 * @returns the start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
export default function startOfDecade<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  const year = convertedDate.getFullYear()
  const decade = Math.floor(year / 10) * 10
  convertedDate.setFullYear(decade, 0, 1)
  convertedDate.setHours(0, 0, 0, 0)
  return convertedDate
}
