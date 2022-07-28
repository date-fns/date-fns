import toDate from '../toDate/index'
import constructFrom from '../constructFrom/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
export default function addMilliseconds<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyAmount: number
): DateType {
  const timestamp = toDate(dirtyDate).getTime()
  const amount = toInteger(dirtyAmount)
  return constructFrom(dirtyDate, timestamp + amount)
}
