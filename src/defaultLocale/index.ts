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
 * import { format, defaultLocale } from 'date-fns'
 * import { frCA } from 'date-fns/locale'
 *
 * // `en-US` out of the box
 * format(new Date(2021, 11, 3), 'MMMM do yyyy') //=> December 3rd 2021
 *
 * // globally set default locale to `fr-CA`
 * defaultLocale(frCA)
 * format(new Date(2021, 11, 3), 'd MMMM yyyy') //=> 3 décembre 2021
 */
export default function defaultLocale(locale?: Locale): Locale {
  if (locale) _defaultLocale = locale

  return _defaultLocale
}

let _defaultLocale = enUS
