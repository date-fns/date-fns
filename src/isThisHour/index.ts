import { constructNow } from "../constructNow/index.js";
import { isSameHour } from "../isSameHour/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isThisHour} function options.
 */
export interface IsThisHourOptions extends ContextOptions<Date> {}

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
export function isThisHour(
  date: DateArg<Date> & {},
  options?: IsThisHourOptions,
): boolean {
  return isSameHour(
    toDate(date, options?.in),
    constructNow(options?.in || date),
  );
}
