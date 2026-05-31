import { constructFrom } from "../constructFrom/index.ts";
import { constructNow } from "../constructNow/index.ts";
import { isSameQuarter } from "../isSameQuarter/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isThisQuarter} function options.
 */
export interface IsThisQuarterOptions extends ContextOptions<Date> {}

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
export function isThisQuarter(
  date: DateArg<Date> & {},
  options?: IsThisQuarterOptions,
): boolean {
  return isSameQuarter(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
