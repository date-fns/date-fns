import toInteger from '../_lib/toInteger/index'
import addMonths from '../addMonths/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
export default function addQuarters(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  const months = amount * 3
  return addMonths(dirtyDate, months)
}
