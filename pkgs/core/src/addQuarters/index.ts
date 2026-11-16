import { addMonths } from "../addMonths/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link addQuarters} function options.
 */
export interface AddQuartersOptions<
  DateType extends Date = Date,
> extends ContextOptions<DateType> {}

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on its classes that support calendar units. To add quarters, add three months per quarter:
 *
 * - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 * @param options - An object with options
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=; Mon Dec 01 2014 00:00:00
 *
 * @example
 * // Using Temporal:
 * // Add 1 quarter to 1 September 2014:
 * Temporal.PlainDate.from("2014-09-01").add({ months: 3 }).toString();
 * //=> "2014-12-01"
 */
export function addQuarters<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddQuartersOptions<ResultDate> | undefined,
): ResultDate {
  return addMonths(date, amount * 3, options);
}
