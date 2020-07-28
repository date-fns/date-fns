import requiredArgs from '../_lib/requiredArgs/index.js'

/**
 * @name setGlobalLocale
 * @category Common Helpers
 * @summary Set the global Locale.
 *
 * @description
 * Sets the global Locale for all functions. However, you may still pass in
 * a different locale to all functions that use them, and it will be used over
 * the global locale.
 *
 * @param {Locale} locale - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `locale` must be a locale object
 *
 * @example
 * // eo is used as the locale for `format` without being passed in
 * import eo from 'date-fns/locale/eo'
 * setGlobalLocale(eo)
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy")
 * //=> '2-a de julio 2014'
 */

export default function setGlobalLocale(locale) {
  requiredArgs(1, arguments)

  if (locale.code === undefined) {
    throw new RangeError('`locale` parameter must be a Locale object')
  }

  var globalScope = typeof global === undefined ? window : global
  globalScope.globalLocale = locale
}
