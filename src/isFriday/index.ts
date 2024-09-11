import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isFriday} function options.
 */
export interface IsFridayOptions extends ContextOptions<Date> {}

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
export function isFriday(
  date: DateArg<Date> & {},
  options?: IsFridayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 5;
}
