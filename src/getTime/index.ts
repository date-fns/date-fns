/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param date - the given date
 * @returns the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
export default function getTime(date: Date | number): number {
  return new Date(date).getTime()
}
