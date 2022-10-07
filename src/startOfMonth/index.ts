import toDate from '../toDate/index'

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
export default function startOfMonth<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  convertedDate.setDate(1)
  convertedDate.setHours(0, 0, 0, 0)
  return convertedDate
}
