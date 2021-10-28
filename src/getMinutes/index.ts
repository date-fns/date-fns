/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param date - the given date
 * @returns the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
export default function getMinutes(date: Date | number): number {
  return new Date(date).getMinutes()
}
