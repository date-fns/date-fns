import addYears from '../addYears/index'

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of years to be subtracted. Decimals will be rounded using `Math.trunc`.
 * @returns the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
export default function subYears(date: Date | number, amount: number): Date {
  const result = Math.trunc(amount)
  return addYears(date, -result)
}
