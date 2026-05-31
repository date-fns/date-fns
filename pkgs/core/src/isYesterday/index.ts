import { constructFrom } from "../constructFrom/index.ts";
import { constructNow } from "../constructNow/index.ts";
import { isSameDay } from "../isSameDay/index.ts";
import { subDays } from "../subDays/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isYesterday} function options.
 */
export interface IsYesterdayOptions extends ContextOptions<Date> {}

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
export function isYesterday(
  date: DateArg<Date> & {},
  options?: IsYesterdayOptions | undefined,
): boolean {
  return isSameDay(
    constructFrom(options?.in || date, date),
    subDays(constructNow(options?.in || date), 1),
  );
}
