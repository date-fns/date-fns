import type { Locale } from '../locale/types'
import { _defaultLocale } from '../_lib/defaultLocale/index'
import enUS from '../locale/en-US/index'

/**
 * @name getDefaultLocale
 * @category Common Helpers
 * @summary Get default locale.
 * @pure false
 *
 * @description
 * Returns the default locale for date-fns functions.
 *
 * You can set the default locale with [setDefaultLocale]{@link https://date-fns.org/docs/setDefaultLocale}.
 *
 * @returns {Locale} default locale
 *
 * @example
 * const code = getDefaultLocale().code
 * //=> 'en-US'
 *
 * @example
 * import eo from 'date-fns/locale/eo'
 * setDefaultLocale(eo)
 * const code = getDefaultLocale()
 * //=> 'eo'
 */
export default function getDefaultLocale(): Locale {
  return _defaultLocale ?? enUS
}
