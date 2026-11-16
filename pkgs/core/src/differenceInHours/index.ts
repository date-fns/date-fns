import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { millisecondsInHour } from "../constants/index.ts";
import type { ContextOptions, DateArg, RoundingOptions } from "../types.ts";

/**
 * The {@link differenceInHours} function options.
 */
export interface DifferenceInHoursOptions
  extends RoundingOptions, ContextOptions<Date> {}

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`Temporal.Instant.prototype.until()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until) method that can return the elapsed hours between two instants.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 *
 * @example
 * // Using Temporal:
 * const earlier = Temporal.Instant.from("2014-07-02T06:50:00Z")
 * const later = Temporal.Instant.from("2014-07-02T19:00:00Z")
 * const result = earlier.until(later, {
 *   largestUnit: "hours",
 *   smallestUnit: "hours",
 *   roundingMode: "trunc",
 * }).hours
 * //=> 12
 */
export function differenceInHours(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInHoursOptions,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
