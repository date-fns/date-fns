import addMinutes from '../addMinutes/index'

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of minutes to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the minutes subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
export default function subMinutes(date: Date | number, amount: number): Date {
  const amountTransformed = Math.trunc(amount)
  return addMinutes(date, -amountTransformed)
}
