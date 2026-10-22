import { isSameDay } from "../isSameDay/index.ts";
import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg, Day } from "../types.ts";

/**
 * The {@link isWorkingDay} function options.
 */
export interface IsWorkingDayOptions extends ContextOptions<Date> {
  /** The days of the week considered weekends. Defaults to `[0, 6]` (Sunday and Saturday). */
  weekendDays?: Day[];
  /** The dates considered non-working days, such as holidays or company shutdowns. Matched by year, month, and day; time is ignored. */
  nonWorkingDays?: DateArg<Date>[];
}

/**
 * @name isWorkingDay
 * @category Weekday Helpers
 * @summary Is the given date a working day?
 *
 * @description
 * Is the given date a working day? A working day is a day that is neither
 * a weekend day nor listed as a non-working day. By default, Saturday (`6`)
 * and Sunday (`0`) are considered weekend days, but you can pass any
 * combination via `weekendDays`. Non-working days are matched by year, month,
 * and day; times are ignored. Recurring holidays must be supplied for each
 * year. When the `in` option is provided, the date and non-working days are
 * compared as calendar days in that context.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is a working day
 *
 * @example
 * // Is 25 December 2014 a working day if it is listed as a non-working day?
 * const result = isWorkingDay(new Date(2014, 11, 25), {
 *   nonWorkingDays: [new Date(2014, 11, 25)]
 * })
 * //=> false
 *
 * @example
 * // Is Sunday 21 September 2014 a working day if the weekend is
 * // Friday-Saturday but that Sunday is listed as a non-working day?
 * const result = isWorkingDay(new Date(2014, 8, 21), {
 *   weekendDays: [5, 6],
 *   nonWorkingDays: [new Date(2014, 8, 21)]
 * })
 * //=> false
 *
 * @example
 * // Is Sunday a working day if the weekend is Friday and Saturday?
 * const result = isWorkingDay(new Date(2014, 8, 21), {
 *   weekendDays: [5, 6]
 * })
 * //=> true
 */
export function isWorkingDay(
  date: DateArg<Date> & {},
  options?: IsWorkingDayOptions | undefined,
): boolean {
  const _date = toDate(date, options?.in);
  if (isNaN(+_date)) return false;

  const day = _date.getDay() as Day;
  const weekendDays = options?.weekendDays ?? [0, 6];
  if (weekendDays.includes(day)) return false;

  return !options?.nonWorkingDays?.some((nonWorkingDay) =>
    isSameDay(_date, nonWorkingDay, options),
  );
}
