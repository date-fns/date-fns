import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isWednesday} function options.
 */
export interface IsWednesdayOptions extends ContextOptions<Date> {}

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export function isWednesday(
  date: DateArg<Date> & {},
  options?: IsWednesdayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 3;
}
