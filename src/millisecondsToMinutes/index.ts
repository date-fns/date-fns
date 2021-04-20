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
 * //Converting 60000 milliseconds to minutes
 * const result = millisecondsToMinutes(60000) => 1
 */

export default function millisecondsToMinutes(
  milliseconds: number,

): number {
  requiredArgs(1, arguments);

  const MILLISECONDS_IN_1MINUTE = 60000;

  const minutes = milliseconds/MILLISECONDS_IN_1MINUTE;
  const minutesRounded = Number(Math.round(Number(minutes + "e" + 3)) + "e" + 3 * -1); //Precision of 3 in decimals

  return minutesRounded;
}
