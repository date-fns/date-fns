import toDate from '../toDate/index'

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - the date that should be before the other one to return true
 * @param dateToCompare - the date to compare with
 * @returns the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
export default function isBefore<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyDateToCompare: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  const dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}
