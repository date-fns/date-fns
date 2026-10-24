import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isSameYear} function options.
 */
export interface IsSameYearOptions extends ContextOptions<Date> {
  /**
   * The month the year starts on (0 = January). Allows working with
   * fiscal or academic years that don't begin in January.
   * @default 0
   */
  yearStartsOn?: number;
}

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
export function isSameYear(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameYearOptions | undefined,
): boolean {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const yearStartsOn = options?.yearStartsOn ?? 0;
  if (!yearStartsOn) {
    return laterDate_.getFullYear() === earlierDate_.getFullYear();
  }
  // A date before the fiscal year's start month belongs to the fiscal
  // year that started the previous calendar year, so the effective year
  // is decremented for those dates before comparing.
  const fiscalYear = (date: Date): number =>
    date.getFullYear() - (date.getMonth() < yearStartsOn ? 1 : 0);
  return fiscalYear(laterDate_) === fiscalYear(earlierDate_);
}
