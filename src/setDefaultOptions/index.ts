import {
  getDefaultOptions as getInternalDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
  DefaultOptions,
} from '../_lib/defaults/defaultOptions'
import assign from '../_lib/assign/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default locale, weekStartsOn or firstWeekContainsDate.
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `optionsfirstWeekContainsDate`.
 * for all functions that use those options.
 *
 * @param {Object} newOptions - an object with options.
 * @param {Locale} [newOptions.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [newOptions.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [newOptions.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @throws {TypeError} 1 argument required
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
 */
export default function setDefaultOptions(
  newOptions: Partial<DefaultOptions>
): void {
  requiredArgs(1, arguments)
  const defaultOptionsClone = assign({}, getInternalDefaultOptions())
  setInternalDefaultOptions(assign(defaultOptionsClone, newOptions))
}
