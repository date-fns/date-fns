import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

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
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`dayOfWeek`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek) property that returns `6` for Saturday.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
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
 *
 * @example
 * // Using Temporal:
 * // Is 27 September 2014 Saturday?
 * const result = Temporal.PlainDate.from("2014-09-27").dayOfWeek === 6
 * //=> true
 */
export function isSaturday(
  date: DateArg<Date> & {},
  options?: IsSaturdayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 6;
}
