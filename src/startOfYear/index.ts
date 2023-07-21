import toDate from '../toDate/index'
import constructFrom from '../constructFrom/index'

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
export default function startOfYear<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  const cleanDate = toDate(dirtyDate)
  const date = constructFrom(dirtyDate, 0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
