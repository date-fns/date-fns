import toDate from '../toDate/index'
import type { ReadonlyDate } from '../types'

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param date - the date to check
 * @returns the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
export default function isThursday<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number
): boolean {
  return toDate(dirtyDate).getDay() === 4
}
