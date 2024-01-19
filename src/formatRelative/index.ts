import { differenceInCalendarDays } from "../differenceInCalendarDays/index.js";
import { format } from "../format/index.js";
import type { FormatRelativeToken } from "../locale/types.js";
import { toDate } from "../toDate/index.js";
import type { LocalizedOptions, WeekOptions } from "../types.js";
import { defaultLocale } from "../_lib/defaultLocale/index.js";
import { getDefaultOptions } from "../_lib/defaultOptions/index.js";

/**
 * The {@link formatRelative} function options.
 */
export interface FormatRelativeOptions
  extends LocalizedOptions<
      "options" | "localize" | "formatLong" | "formatRelative"
    >,
    WeekOptions {}

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The date in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(subDays(new Date(), 6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
export function formatRelative<DateType extends Date>(
  date: DateType | number | string,
  baseDate: DateType | number | string,
  options?: FormatRelativeOptions,
): string {
  const _date = toDate(date);
  const _baseDate = toDate(baseDate);

  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale;
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const diff = differenceInCalendarDays(_date, _baseDate);

  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }

  let token: FormatRelativeToken;
  if (diff < -6) {
    token = "other";
  } else if (diff < -1) {
    token = "lastWeek";
  } else if (diff < 0) {
    token = "yesterday";
  } else if (diff < 1) {
    token = "today";
  } else if (diff < 2) {
    token = "tomorrow";
  } else if (diff < 7) {
    token = "nextWeek";
  } else {
    token = "other";
  }

  const formatStr = locale.formatRelative(token, _date, _baseDate, {
    locale,
    weekStartsOn,
  });
  return format(_date, formatStr, { locale, weekStartsOn });
}
