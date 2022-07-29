import { millisecondsInHour } from '../constants/index'

/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - number of milliseconds to be converted
 *
 * @returns the number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */
export default function millisecondsToHours(milliseconds: number): number {
  const hours = milliseconds / millisecondsInHour
  return Math.floor(hours)
}
