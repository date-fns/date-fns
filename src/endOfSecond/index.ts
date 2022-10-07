import toDate from '../toDate/index'

/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @returns the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
export default function endOfSecond<DateType extends Date>(
  date: DateType | number
): DateType {
  const convertedDate = toDate(date)
  convertedDate.setMilliseconds(999)
  return convertedDate
}
