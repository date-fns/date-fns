import { nextDay } from "../nextDay/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link nextSaturday} function options.
 */
export interface NextSaturdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */
export function nextSaturday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: NextSaturdayOptions<ResultDate>,
): ResultDate {
  return nextDay(date, 6, options);
}
