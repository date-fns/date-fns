import {
  getDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
  DefaultOptions,
} from '../_lib/defaultOptions/index'

/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options including locale.
 * @pure false
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * @param newOptions - an object with options.
 * @param newOptions.locale - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param newOptions.weekStartsOn - the index of the first day of the week (0 - Sunday)
 * @param newOptions.firstWeekContainsDate - the day of January, which is always in the first week of the year
 *
 * @example
 * // Set global locale:
 * import { es } from 'date-fns/locale'
 * setDefaultOptions({ locale: es })
 * const result = format(new Date(2014, 8, 2), 'PPPP')
 * //=> 'martes, 2 de septiembre de 2014'
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Start of the week for 2 September 2014,
 * // when we set that week starts on Monday by default:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default options:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */
export default function setDefaultOptions(newOptions: DefaultOptions): void {
  const result: DefaultOptions = {}
  const defaultOptions = getDefaultOptions()

  for (const property in defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
      ;(result as any)[property] =
        defaultOptions[property as keyof DefaultOptions]
    }
  }

  for (const property in newOptions) {
    if (Object.prototype.hasOwnProperty.call(newOptions, property)) {
      if (newOptions[property as keyof DefaultOptions] === undefined) {
        delete (result as any)[property]
      } else {
        ;(result as any)[property] =
          newOptions[property as keyof DefaultOptions]
      }
    }
  }

  setInternalDefaultOptions(result)
}
