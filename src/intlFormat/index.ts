import { toDate } from "../toDate/index.js";
import type { DateFns } from "../types.js";

/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 * @deprecated
 *
 * [TODO] Remove in v4
 */
export type IntlFormatLocale = Intl.ResolvedDateTimeFormatOptions["locale"];

/**
 * The {@link intlFormat} function options.
 */
export interface IntlFormatOptions
  extends Intl.DateTimeFormatOptions {
  /** The locales to use (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) */
  locale?: DateFns.Utils.MaybeArray<
    Intl.ResolvedDateTimeFormatOptions["locale"]
  >;
}

/**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 * @deprecated
 *
 * [TODO] Remove in v4
 */
export type IntlFormatFormatOptions = Intl.DateTimeFormatOptions;

/**
 * The locale options.
 * @deprecated
 *
 * [TODO] Remove in v4
 */
export interface IntlFormatLocaleOptions {
  locale: IntlFormatOptions["locale"];
}

/**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
export function intlFormat<DateType extends Date>(
  date: DateType | number | string,
): string;

/**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param options - An object with format and locale options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with specified format and locale options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   dateStyle: 'short',
 *   locale: 'ko-KR',
 * })
 * //=> 19. 10. 4.
 */
export function intlFormat<DateType extends Date>(
  date: DateType | number | string,
  options: IntlFormatOptions,
): string;

/**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 *
 * @deprecated Passing separate arguments for format and locale options is deprecated. Use a single options argument instead.
 */
export function intlFormat<DateType extends Date>(
  date: DateType | number | string,
  formatOptions: IntlFormatFormatOptions,
  localeOptions: IntlFormatLocaleOptions,
): string;

export function intlFormat<DateType extends Date>(
  date: DateType | number | string,
  options?: IntlFormatOptions,
  /* [TODO] Remove in v4 */
  localeOptions?: IntlFormatLocaleOptions,
): string {
  const { locale, ...formatOptions } = { ...options, ...localeOptions };

  return new Intl.DateTimeFormat(locale, formatOptions).format(
    toDate(date),
  );
}
