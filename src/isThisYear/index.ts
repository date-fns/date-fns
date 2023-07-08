import isSameYear from '../isSameYear/index'

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - the date to check
 * @returns the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
export default function isThisYear<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return isSameYear(dirtyDate, Date.now())
}
