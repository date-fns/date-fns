import toDate from '../toDate/index'

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
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
export default function getHours<DateType extends Date>(
  dirtyDate: DateType | number
): number {
  const date = toDate(dirtyDate)
  const hours = date.getHours()
  return hours
}
