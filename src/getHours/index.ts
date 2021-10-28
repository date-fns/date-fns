/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param date - the given date
 * @returns the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
export default function getHours(date: Date | number): number {
  return new Date(date).getHours()
}
