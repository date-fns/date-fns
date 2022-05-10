import { setDefaultLocale } from '../_lib/defaultLocale/index'

/**
 * @name setDefaultLocale
 * @category Common Helpers
 * @summary Set default locale.
 * @pure false
 *
 * @description
 * Sets the default locale for date-fns functions.
 *
 * @param {Locale} [locale] - a locale object or undefined. See [Locale]{@link https://date-fns.org/docs/Locale}
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * import enGB from 'date-fns/locale/en-GB'
 *
 * // Start of the week for 2 September 2014,
 * // when we set that a locale in which week starts on Monday:
 * setDefaultLocale(enGB)
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default locale:
 * setDefaultLocale(enGB)
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set the locale to the library default en-US by using undefined as the argument:
 * setDefaultLocale(enGB)
 * setDefaultLocale(undefined)
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */
export default setDefaultLocale
