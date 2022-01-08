import addMilliseconds from '../addMilliseconds/index'

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
export default function subMilliseconds(
  date: Date | number,
  amount: number
): Date {
  const amountTransformed = Math.trunc(amount)
  return addMilliseconds(date, -amountTransformed)
}
