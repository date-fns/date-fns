import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { millisecondsInHour } from "../constants/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link getHoursBetween} function options.
 */
export interface GetHoursBetweenOptions extends ContextOptions<Date> {}

/**
 * @name getHoursBetween
 * @category Hour Helpers
 * @summary Get the number of full hours between the given dates.
 *
 * @description
 * Get the number of full hour periods between two dates. Fractional hours are
 * truncated towards zero.
 *
 * One "full hour" is a complete 60-minute period. For example, the difference
 * between 10:30 and 11:30 is 1 full hour, but the difference between 10:30
 * and 11:29 is 0 full hours.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full hours
 *
 * @example
 * // How many full hours are between
 * // 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = getHoursBetween(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 *
 * @example
 * // How many full hours are between
 * // 2 July 2014 06:50:00 and 2 July 2014 18:49:00?
 * const result = getHoursBetween(
 *   new Date(2014, 6, 2, 18, 49),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 11
 */
export function getHoursBetween(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: GetHoursBetweenOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  const result = Math.trunc(diff);
  
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

