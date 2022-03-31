import requiredArgs from '../_lib/requiredArgs/index'
import { monthsInYear } from '../constants/index'
import { DecimalsOptions, useDecimals } from '../_lib/useDecimals'

/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param {number} months - number of months to be converted
 * @param {Object} [options] - an object with options.
 *
 * @returns {number} the number of months converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding by default:
 * const result = monthsToYears(40)
 * //=> 3
 *
 * // It can be set to show decimals(displays 2 digits after the decimal point by default):
 * const result = monthsToYears(40, {decimals: true})
 * //=> 3.33
 * result = monthsToYears(40, {decimals: true, digits: 4})
 * //=> 3.3333
 */
export default function monthsToYears(
  months: number,
  options: DecimalsOptions = {}
): number {
  requiredArgs(1, arguments)
  const years = months / monthsInYear

  const result = useDecimals(years, options)

  if (result.isDecimals) {
    return result.num
  } else {
    return Math.floor(years)
  }
}
