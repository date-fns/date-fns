import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name secondsToHours
 * @category Common Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert seconds number to hours numbers.
 *
 * @param { number } seconds - number of seconds to be converted.
 *
 * @returns {number} the number of seconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 7200 seconds into hours
 * const result = secondsToHours(7200) => 2
 */

export default function secondsToHours(
  seconds: number,

): number {
  requiredArgs(1, arguments);

  const hours = seconds/3600;
  const hoursRounded = Number(Math.round(Number(hours + "e" + 3)) + "e" + 3 * -1); //Precision of 3 in decimals

  return hoursRounded;
}
