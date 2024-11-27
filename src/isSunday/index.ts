import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isSunday} function options.
 */
export interface IsSundayOptions extends ContextOptions<Date> {}

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
export function isSunday(
  date: DateArg<Date> & {},
  options?: IsSundayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 0;
}
