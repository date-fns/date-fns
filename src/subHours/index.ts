import addHours from '../addHours/index'
import type { ReadonlyDate } from '../types'

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of hours to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
export default function subHours<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number,
  amount: number
): DateType {
  return addHours(dirtyDate, -amount)
}
