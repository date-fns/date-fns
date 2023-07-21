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
  dirtyDate: DateType | number,
  dirtyDateToCompare: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  const dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}
