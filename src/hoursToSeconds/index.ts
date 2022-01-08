import { secondsInHour } from '../constants/index'

/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param hours - number of hours to be converted
 *
 * @returns the number of hours converted in seconds
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */
export default function hoursToSeconds(hours: number): number {
  return Math.floor(hours * secondsInHour)
}
