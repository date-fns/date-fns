import toInteger from '../_lib/toInteger/index'
import addDays from '../addDays/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - the date to be changed
 * @param amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
export default function subDays(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addDays(dirtyDate, -amount)
}
