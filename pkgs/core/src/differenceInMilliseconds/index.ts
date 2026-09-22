import { toDate } from "../toDate/index.ts";
import type { DateArg } from "../types.ts";

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * **You don't need date-fns\***:
 *
 * Temporal instants expose their Unix timestamp through [`Temporal.Instant.prototype.epochMilliseconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds), so subtract the earlier value from the later value.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 *
 * @example
 * // Using Temporal:
 * const earlier = Temporal.Instant.from("2014-07-02T12:30:20.600Z")
 * const later = Temporal.Instant.from("2014-07-02T12:30:21.700Z")
 * const result = later.epochMilliseconds - earlier.epochMilliseconds
 * //=> 1100
 */
export function differenceInMilliseconds(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
): number {
  return +toDate(laterDate) - +toDate(earlierDate);
}
