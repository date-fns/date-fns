import { getRoundingMethod } from "../_lib/getRoundingMethod/index.js";
import { differenceInMonths } from "../differenceInMonths/index.js";
import { toDate } from "../toDate/index.js";
import type { RoundingOptions, DateFns } from "../types.js";

/**
 * The {@link differenceInQuarters} function options.
 */
export interface DifferenceInQuartersOptions<DateType extends Date>
  extends RoundingOptions,
    DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
export function differenceInQuarters<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInQuartersOptions<ContextDate>,
): number {
  const diff =
    differenceInMonths(
      toDate(dateLeft, options?.in),
      toDate(dateRight, options?.in),
    ) / 3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
