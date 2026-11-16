import { millisecondsInMinute } from "../constants/index.ts";
import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link addMinutes} function options.
 */
export interface AddMinutesOptions<
  DateType extends Date = Date,
> extends ContextOptions<DateType> {}

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on its classes that support time units:
 *
 * - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 *
 * @example
 * // Using Temporal:
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * Temporal.PlainDateTime.from("2014-07-10T12:00:00")
 *   .add({ minutes: 30 })
 *   .toString();
 * //=> "2014-07-10T12:30:00"
 */
export function addMinutes<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddMinutesOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}
