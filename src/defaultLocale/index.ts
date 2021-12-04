import enUS from '../locale/en-US/index'
import type { Locale } from '../locale/types'

/**
 * @name defaultLocale
 * @category Common Helpers
 * @summary Sets or gets the default locale used by all functions
 *
 * @description
 * Sets or gets the default locale used by all functions. See [Locale]{@link https://date-fns.org/docs/Locale}
 *
 * @param {Locale} [locale] - the new locale to be used as default
 * @returns {Locale} the default locale
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
export default function defaultLocale(locale?: Locale): Locale {
  if (locale) _defaultLocale = locale

  return _defaultLocale
}

let _defaultLocale = enUS
