import toDate from '../toDate/index'

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
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
export default function getQuarter<DateType extends Date>(
  dirtyDate: DateType | number
): number {
  const date = toDate(dirtyDate)
  const quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}
