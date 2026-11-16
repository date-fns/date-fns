import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isWeekend} function options.
 */
export interface IsWeekendOptions extends ContextOptions<Date> {}

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`dayOfWeek`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek) property. Weekend days have values of `6` or greater.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 *
 * @example
 * // Using Temporal:
 * // Does 5 October 2014 fall on a weekend?
 * const result = Temporal.PlainDate.from("2014-10-05").dayOfWeek >= 6
 * //=> true
 */
export function isWeekend(
  date: DateArg<Date> & {},
  options?: IsWeekendOptions | undefined,
): boolean {
  const day = toDate(date, options?.in).getDay();
  return day === 0 || day === 6;
}
