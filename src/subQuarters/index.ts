import addQuarters from '../addQuarters/index'

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of quarters to be subtracted. Decimals will be rounded using `Math.trunc`.
 * @returns the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
export default function subQuarters(date: Date | number, amount: number): Date {
  const result = Math.trunc(amount)
  return addQuarters(date, -result)
}
