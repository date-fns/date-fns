type Locale = Intl.ResolvedDateTimeFormatOptions['locale']
type FormatOptions = Intl.DateTimeFormatOptions
type LocaleOptions = { locale: Locale | Locale[] }

export default function intlFormat<DateType extends Date>(
  date: DateType
): string

export default function intlFormat<DateType extends Date>(
  date: DateType,
  localeOptions: LocaleOptions
): string

export default function intlFormat<DateType extends Date>(
  date: DateType,
  formatOptions: FormatOptions
): string

export default function intlFormat<DateType extends Date>(
  date: DateType,
  formatOptions: FormatOptions,
  localeOptions: LocaleOptions
): string

/**
 * @name intlFormat
 * @category Common Helpers
 * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param argument - the original date.
 * @param formatOptions - an object with options.
 * @param formatOptions.localeMatcher - locale selection algorithm.
 * @param formatOptions.weekday - representation the days of the week.
 * @param formatOptions.era - representation of eras.
 * @param formatOptions.year - representation of years.
 * @param formatOptions.month - representation of month.
 * @param formatOptions.day - representation of day.
 * @param formatOptions.hour - representation of hours.
 * @param formatOptions.minute - representation of minutes.
 * @param formatOptions.second - representation of seconds.
 * @param formatOptions.timeZoneName - representation of names of time zones.
 * @param formatOptions.formatMatcher - format selection algorithm.
 * @param formatOptions.hour12 - determines whether to use 12-hour time format.
 * @param formatOptions.timeZone - the time zone to use.
 * @param localeOptions - an object with locale.
 * @param localeOptions.locale - the locale code
 * @returns the formatted date string.
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      weekday: 'long',
 *      year: 'numeric',
 *      month: 'long',
 *      day: 'numeric',
 *    }, {
 *      locale: 'de-DE',
 *  })
 * //=> Freitag, 4. Oktober 2019
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      year: 'numeric',
 *      month: 'numeric',
 *      day: 'numeric',
 *      hour: 'numeric',
 *  })
 * //=> 10/4/2019, 12 PM
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      locale: 'ko-KR',
 *  })
 * //=> 2019. 10. 4.
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
export default function intlFormat<DateType extends Date>(
  date: DateType,
  formatOrLocale?: FormatOptions | LocaleOptions,
  localeOptions?: LocaleOptions
): string {
  let formatOptions: FormatOptions | undefined

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale
  } else {
    localeOptions = formatOrLocale
  }

  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(
    date as DateType
  )
}

function isFormatOptions(
  opts: LocaleOptions | FormatOptions | undefined
): opts is FormatOptions {
  return opts !== undefined && !('locale' in opts)
}
