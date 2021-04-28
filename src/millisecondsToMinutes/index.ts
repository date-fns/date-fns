import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name millisecondsToMinutes
 * @category Common Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * //Converting milliseconds number to minutes numbers.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 60000 milliseconds to minutes
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 */

export default function millisecondsToMinutes(milliseconds: number): number {
  requiredArgs(1, arguments);
  // const milliseconds in 1 minute => 60000;
  const minutes = milliseconds/60000;
  return Math.floor(minutes);
}
