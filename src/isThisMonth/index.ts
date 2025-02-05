import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameMonth } from "../isSameMonth/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isThisMonth} function options.
 */
export interface IsThisMonthOptions extends ContextOptions<Date> {}

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
export function isThisMonth(
  date: DateArg<Date> & {},
  options?: IsThisMonthOptions | undefined,
): boolean {
  return isSameMonth(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
