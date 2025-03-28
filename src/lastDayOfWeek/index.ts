import { getDefaultOptions } from "../_lib/defaultOptions/index.js";
import { toDate } from "../toDate/index.js";
import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  WeekOptions,
} from "../types.js";

/**
 * The {@link lastDayOfWeek} function options.
 */
export interface LastDayOfWeekOptions<DateType extends Date = Date>
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<DateType> {}

/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone unless a context is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a week
 */
export function lastDayOfWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: LastDayOfWeekOptions<ResultDate>,
): ResultDate {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  _date.setHours(0, 0, 0, 0);
  _date.setDate(_date.getDate() + diff);

  return _date;
}
