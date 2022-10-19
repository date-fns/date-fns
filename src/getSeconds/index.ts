import toDate from '../toDate/index'
import type { ReadonlyDate } from '../types'

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
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
export default function getSeconds<DateType extends Date>(
  dirtyDate: ReadonlyDate<DateType> | number
): number {
  const date = toDate(dirtyDate)
  const seconds = date.getSeconds()
  return seconds
}
