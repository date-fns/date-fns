import { addDays } from "../addDays/index.ts";
import { constructNow } from "../constructNow/index.ts";
import { isSameDay } from "../isSameDay/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isTomorrow} function options.
 */
export interface IsTomorrowOptions extends ContextOptions<Date> {}

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
export function isTomorrow(
  date: DateArg<Date> & {},
  options?: IsTomorrowOptions | undefined,
): boolean {
  return isSameDay(
    date,
    addDays(constructNow(options?.in || date), 1),
    options,
  );
}
