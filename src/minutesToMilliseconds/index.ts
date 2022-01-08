import { millisecondsInMinute } from '../constants/index'

/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - number of minutes to be converted
 *
 * @returns the number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */
export default function minutesToMilliseconds(minutes: number): number {
  return Math.floor(minutes * millisecondsInMinute)
}
