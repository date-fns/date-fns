import addMilliseconds from '../addMilliseconds/index'

const MILLISECONDS_IN_HOUR = 3600000

/**
 * Add the specified number of hours to the given date.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @returns The new date with the hours added
 *
 * @example
 * Add 2 hours to 10 July 2014 23:00:00:
 * ```ts
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 * ```
 *
 * @category Hour Helpers
 */
export default function addHours(date: Date | number, amount: number) {
  return addMilliseconds(date, amount * MILLISECONDS_IN_HOUR)
}
