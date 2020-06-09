import addMilliseconds from '../addMilliseconds/index'

const MILLISECONDS_IN_MINUTE = 60000

/**
 * Add the specified number of minutes to the given date.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added
 * @returns The new date with the minutes added
 *
 * @example
 * Add 30 minutes to 10 July 2014 12:00:00:
 * ```ts
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 * ```
 *
 * @category Minute Helpers
 */
export default function addMinutes(date: Date | number, amount: number) {
  return addMilliseconds(date, amount * MILLISECONDS_IN_MINUTE)
}
