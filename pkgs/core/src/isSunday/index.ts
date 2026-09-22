import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

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
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`dayOfWeek`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek) property that returns `7` for Sunday.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
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
 *
 * @example
 * // Using Temporal:
 * // Is 21 September 2014 Sunday?
 * const result = Temporal.PlainDate.from("2014-09-21").dayOfWeek === 7
 * //=> true
 */
export function isSunday(
  date: DateArg<Date> & {},
  options?: IsSundayOptions | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 0;
}
