import toDate from '../toDate/index'

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - the date that should be after the other one to return true
 * @param dateToCompare - the date to compare with
 * @returns the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
export default function isAfter<DateType extends Date>(
  date: DateType | number,
  dateToCompare: DateType | number
): boolean {
  const convertedDate = toDate(date)
  const convertedDateToCompare = toDate(dateToCompare)
  return convertedDate.getTime() > convertedDateToCompare.getTime()
}
