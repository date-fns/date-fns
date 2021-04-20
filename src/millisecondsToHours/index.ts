import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name millisecondsToHours
 * @category Common Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert milliseconds number to hours numbers.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 720000 milliseconds to hours
 * const result = millisecondsToHours(7200000) => 2
 */

export default function millisecondsToHours(
  milliseconds: number,

): number {
  requiredArgs(1, arguments);

  const MILLISECONDS_IN_1HOUR = 3600000;

  const hours = milliseconds/MILLISECONDS_IN_1HOUR;
  const hoursRounded = Number(Math.round(Number(hours + "e" + 3)) + "e" + 3 * -1); //Precision of 3 in decimals

  return hoursRounded;
}
