import toDate from '../toDate/index'

/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
export default function endOfHour<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  convertedDate.setMinutes(59, 59, 999)
  return convertedDate
}
