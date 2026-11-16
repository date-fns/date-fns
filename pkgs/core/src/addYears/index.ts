import { addMonths } from "../addMonths/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link addYears} function options.
 */
export interface AddYearsOptions<
  DateType extends Date = Date,
> extends ContextOptions<DateType> {}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on its classes that support calendar units:
 *
 * - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 *
 * @example
 * // Using Temporal:
 * // Add 5 years to 1 September 2014:
 * Temporal.PlainDate.from("2014-09-01").add({ years: 5 }).toString();
 * //=> "2019-09-01"
 */
export function addYears<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddYearsOptions<ResultDate> | undefined,
): ResultDate {
  return addMonths(date, amount * 12, options);
}
