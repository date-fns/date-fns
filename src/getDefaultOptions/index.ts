import {
  getDefaultOptions as getInternalDefaultOptions,
  DefaultOptions,
} from '../_lib/defaults/defaultOptions'
import defaultLocale from '../_lib/defaults/defaultLocale'
import assign from '../_lib/assign/index'

/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default locale, weekStartsOn and firstWeekContainsDate.
 *
 * @description
 * Returns an object containing the values that are used
 * as default `options.locale`, `options.weekStartsOn` and `optionsfirstWeekContainsDate`
 * in functions that use those options.
 *
 * You can change those values with [setDefaultOptions]{@link https://date-fns.org/docs/setDefaultOptions}.
 *
 * @returns {Object} default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> { weekStartsOn: 0, firstWeekContainsDate: 1, locale: enUS }
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStartsOn: 1, firstWeekContainsDate: 4, locale: enUS }
 */
export default function getDefaultOptions(): Required<DefaultOptions> {
  return assign({ locale: defaultLocale }, getInternalDefaultOptions())
}
