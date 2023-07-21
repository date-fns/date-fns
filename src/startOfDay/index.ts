import toDate from '../toDate/index'

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
export default function startOfDay<DateType extends Date>(
  dirtyDate: DateType | number
): DateType {
  const date = toDate(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}
