import { toDate } from "../toDate/index.ts";
import type { DateArg, MaybeArray } from "../types.ts";

/**
 * The locale options.
 */
export interface IntlFormatDayAndMonthLocaleOptions {
  /** The locales to use (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) */
  locale: MaybeArray<Intl.ResolvedDateTimeFormatOptions["locale"]>;
}

/**
 * @name intlFormatDayAndMonth
 * @category Common Helpers
 * @summary Format the date's day and month with Intl.DateTimeFormat.
 *
 * @description
 * Return the formatted date string in the given format, showing only the day and month.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 5 April in English:
 * const result = intlFormatDayAndMonth(new Date(2021, 3, 5), {
 *   locale: 'en-US',
 * })
 * //=> April 5
 *
 * @example
 * // Represent 5 April in Spanish:
 * const result = intlFormatDayAndMonth(new Date(2021, 3, 5), {
 *   locale: 'es-ES',
 * })
 * //=> 5 de abril
 */
export function intlFormatDayAndMonth(
  date: DateArg<Date> & {},
  localeOptions?: IntlFormatDayAndMonthLocaleOptions,
): string {
  return new Intl.DateTimeFormat(localeOptions?.locale, {
    month: 'long',
    day: 'numeric',
  }).format(toDate(date));
}
