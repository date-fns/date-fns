import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isSaturday} function options.
 */
export interface IsSaturdayOptions extends ContextOptions<Date> {}

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
export function isSaturday(
  date: DateArg<Date> & {},
  options?: IsSaturdayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 6;
}
