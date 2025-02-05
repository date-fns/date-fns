import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isTuesday} function options.
 */
export interface IsTuesdayOptions extends ContextOptions<Date> {}

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
export function isTuesday(
  date: DateArg<Date> & {},
  options?: IsTuesdayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 2;
}
