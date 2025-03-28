import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getDaysInMonth} function options.
 */
export interface GetDaysInMonthOptions extends ContextOptions<Date> {}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export function getDaysInMonth(
  date: DateArg<Date> & {},
  options?: GetDaysInMonthOptions | undefined,
): number {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
