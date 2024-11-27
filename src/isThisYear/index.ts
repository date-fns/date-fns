import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameYear } from "../isSameYear/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isThisYear} function options.
 */
export interface IsThisYearOptions extends ContextOptions<Date> {}

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
export function isThisYear(
  date: DateArg<Date> & {},
  options?: IsThisYearOptions | undefined,
): boolean {
  return isSameYear(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
