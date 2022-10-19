import toDate from '../toDate/index'
import type { ReadonlyDate } from '../types'

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - the date to check
 * @returns the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export default function isWednesday<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number
): boolean {
  return toDate(dirtyDate).getDay() === 3
}
