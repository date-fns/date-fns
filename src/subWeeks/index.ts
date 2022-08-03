import addWeeks from '../addWeeks/index'

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param date - the date to be changed
 * @param amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
export default function subWeeks<DateType extends Date>(
  dirtyDate: DateType | number,
  amount: number
): DateType {
  return addWeeks(dirtyDate, -amount)
}
