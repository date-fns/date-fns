/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - the given date
 * @returns the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
export default function getQuarter(date: Date | number): number {
  return Math.floor(new Date(date).getMonth() / 3) + 1
}
