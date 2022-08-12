import { secondsInMinute } from '../constants/index'

/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param seconds - number of seconds to be converted
 *
 * @returns the number of seconds converted in minutes
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */
export default function secondsToMinutes(seconds: number): number {
  const minutes = seconds / secondsInMinute
  return Math.floor(minutes)
}
