/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param date - the given date
 * @returns the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
export default function getSeconds(date: Date | number): number {
  return new Date(date).getSeconds()
}
