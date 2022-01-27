import enUS from '../locale/en-US/index'
import type { Locale } from '../locale/types'

let currentLocale = enUS

/**
 * @name setLocale
 * @category Common Helpers
 * @summary Set the current locale
 *
 * @description
 * Set the current locale to be used in the functions that support I18n, such
 * as `format`, `formatRelative`, `parse`, etc.
 *
 * @param {Locale} locale - the locale to set as the current
 *
 * @example
 * import ru from 'date-fns/locale/ru'
 * import { setLocale, format } from 'date-fns'
 *
 * format(new Date(2014, 6, 2), "PPpp")
 * //=> "Jul 2, 2014, 12:00:00 AM"
 *
 * // Set Russian locale as the default
 * setLocale(ru)
 *
 * format(new Date(2014, 6, 2), "PPpp")
 * //=> "2 июл. 2014 г., 0:00:00"
 */
export default function setLocale(locale: Locale) {
  currentLocale = locale
}

/**
 * @private
 *
 * @name getLocale
 * @category Common Helpers
 * @summary Get the current locale
 *
 * @description
 * Get the current locale.
 *
 * @returns the current locale
 */
export function getLocale(): Locale {
  return currentLocale
}
