import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { startOfQuarter } from "../startOfQuarter/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isSameQuarter} function options.
 */
export interface IsSameQuarterOptions extends ContextOptions<Date> {}

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
export function isSameQuarter(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameQuarterOptions | undefined,
): boolean {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return +startOfQuarter(dateLeft_) === +startOfQuarter(dateRight_);
}
