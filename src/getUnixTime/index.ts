import getTime from '../getTime/index'

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - the given date
 * @returns the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
export default function getUnixTime(date: Date | number): number {
  return Math.floor(getTime(date) / 1000)
}
