import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name monthsToQuarters
 * @category Common Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert number of months to quarters.
 *
 * @param { number } months - number of months to be converted.
 *
 * @returns {number} the number of months converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 6 months to quarters
 * const result = monthsToQuarters(6) => 2
 */

export default function monthsToQuarters(
  months: number,

): number {
  requiredArgs(1, arguments);

  const quarters = months/3;

  const quartersRounded = Number(Math.round(Number(quarters + "e" + 2)) + "e" + 2 * -1); //Precision of 2 in decimals

  return quartersRounded;
}
