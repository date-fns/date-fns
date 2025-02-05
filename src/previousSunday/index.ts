import { previousDay } from "../previousDay/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link previousSunday} function options.
 */
export interface PreviousSundayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */
export function previousSunday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: PreviousSundayOptions<ResultDate> | undefined,
): ResultDate {
  return previousDay(date, 0, options);
}
