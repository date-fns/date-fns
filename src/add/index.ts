import { addDays } from "../addDays/index.js";
import { addMonths } from "../addMonths/index.js";
import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg, Duration } from "../types.js";

/**
 * The {@link add} function options.
 */
export interface AddOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes, and seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
export function add<DateType extends Date, ResultDate extends Date = DateType>(
  date: DateArg<DateType>,
  duration: Duration,
  options?: AddOptions<ResultDate> | undefined,
): ResultDate {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = toDate(date, options?.in);
  const dateWithMonths =
    months || years ? addMonths(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes, and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;

  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}
