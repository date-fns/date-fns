import toDate from '../toDate/index'

/**
 * @name isLeapDay
 * @category Day Helpers
 * @summary Is the given date a leap day?
 *
 * @description
 * Is the given date a leap day?
 *
 * @param date - the date to check
 * @returns the date is a leap day
 *
 * @example
 * // Is 29 February 2012 a leap day?
 * const result = isLeapDay(new Date(2012, 1, 29))
 * //=> true
 */
export default function isLeapDay<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  return date.getMonth() === 1 && date.getDate() === 29
}
