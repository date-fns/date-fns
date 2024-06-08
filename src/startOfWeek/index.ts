import { toDate } from "../toDate/index.js";
import type { LocalizedOptions, WeekOptions, Locale } from "../types.js";
import { getDefaultOptions } from "../_lib/defaultOptions/index.js";
import { enUS } from "../locale/index.js";

/**
 * The {@link startOfWeek} function options.
 */
export interface StartOfWeekOptions
  extends LocalizedOptions<"options">,
  WeekOptions { }

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
  * @description
 * Return the start of a week for the given date, considering the locale information 
 * provided in the options or default settings. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *  * @property {Locale} [locale] - The locale object used to determine the week start day. 
 * If not provided, the default locale or `enUS` is used.
 * 
 *
 * @returns The start of a week
 *
 * @example
 * // The start of the week for September 2nd, 2014, considering US English locale (Sunday start):
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // The start of the week for September 2nd, 2014, considering Arabic (Egypt) locale (Saturday start):
 * const result = startOfWeek(new Date(2014, 8, 2), { locale: arDZ })
 * //=> Sat Aug 30 2014 00:00:00
 */
export function startOfWeek<DateType extends Date>(
  date: DateType | number | string,
  options?: StartOfWeekOptions,
): DateType {
  const defaultOptions = getDefaultOptions();
  const locale: Locale = options?.locale as Locale || defaultOptions.locale as Locale || enUS


  const localeWeekStartsOn = locale.options?.weekStartsOn;


  const weekStartsOn =
    options?.weekStartsOn ??
    localeWeekStartsOn ??
    defaultOptions.weekStartsOn ??
    0;

  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
