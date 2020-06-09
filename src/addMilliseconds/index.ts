/**
 * Add the specified number of milliseconds to the given date.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added
 * @returns The new date with the milliseconds added
 *
 * @example
 * Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * ```ts
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 * ```
 *
 * @category Millisecond Helpers
 */
export default function addMilliseconds(
  dirtyDate: Date | number,
  amount: number
) {
  const timestamp = new Date(dirtyDate).getTime()
  return new Date(timestamp + amount)
}
