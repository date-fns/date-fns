import { millisecondsInHour } from '../constants/index'
import addMilliseconds from '../addMilliseconds/index'

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
export default function addHours(date: Date | number, amount: number): Date {
  return addMilliseconds(date, Math.trunc(amount) * millisecondsInHour)
}
