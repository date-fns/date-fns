import addSeconds from '../addSeconds/index'

/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of seconds to be subtracted. Decimals will be rounded using `Math.trunc`.
 * @returns the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
export default function subSeconds(date: Date | number, amount: number): Date {
  const result = Math.trunc(amount)
  return addSeconds(date, -result)
}
