import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name millisecondsToSeconds
 * @category Common Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert milliseconds number to seconds numbers.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 1000 miliseconds to seconds
 * const result = millisecondsToSeconds(1000) => 1
 */

export default function millisecondsToSeconds(
  milliseconds: number,

): number {
  requiredArgs(1, arguments);

  const MILLISECONDS_IN_1SECOND = 1000;

  const seconds = milliseconds/MILLISECONDS_IN_1SECOND;

  const secondsRounded = Number(Math.round(Number(seconds + "e" + 3)) + "e" + 3 * -1); //Precision of 3 in decimals

  return secondsRounded;
}
