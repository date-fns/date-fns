import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name secondsToMinutes
 * @category Common Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert seconds number to minutes numbers.
 *
 * @param { number } seconds - number of seconds to be converted.
 *
 * @returns {number} the number of seconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 */

export default function secondsToMinutes(seconds: number): number {
  requiredArgs(1, arguments);
  const minutes = seconds/60;
  return Math.floor(minutes);
}
