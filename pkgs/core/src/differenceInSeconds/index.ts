import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { differenceInMilliseconds } from "../differenceInMilliseconds/index.ts";
import type { DateArg, RoundingOptions } from "../types.ts";

/**
 * The {@link differenceInSeconds} function options.
 */
export interface DifferenceInSecondsOptions extends RoundingOptions {}

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`Temporal.Instant.prototype.until()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until) method that can return the elapsed seconds between two instants.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 *
 * @example
 * // Using Temporal:
 * const earlier = Temporal.Instant.from("2014-07-02T12:30:07.999Z")
 * const later = Temporal.Instant.from("2014-07-02T12:30:20.000Z")
 * const result = earlier.until(later, {
 *   largestUnit: "seconds",
 *   smallestUnit: "seconds",
 *   roundingMode: "trunc",
 * }).seconds
 * //=> 12
 */
export function differenceInSeconds(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInSecondsOptions,
): number {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1000;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
