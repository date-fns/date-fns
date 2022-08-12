import { monthsInQuarter } from '../constants/index'

/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param quarters - number of quarters to be converted
 *
 * @returns the number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */
export default function quartersToMonths(quarters: number): number {
  return Math.floor(quarters * monthsInQuarter)
}
