import type { DefaultOptions } from "../_lib/defaultOptions/index.ts";
import {
  getDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
} from "../_lib/defaultOptions/index.ts";

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
 * @param options - An object with options
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

export function setDefaultOptions(options: DefaultOptions): void {
  const result: DefaultOptions = {};
  const defaultOptions = getDefaultOptions();

  for (const property in defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
      const key = property as keyof DefaultOptions;
      if (key === "locale") {
        result.locale = defaultOptions.locale;
      } else if (key === "weekStartsOn") {
        result.weekStartsOn = defaultOptions.weekStartsOn;
      } else if (key === "firstWeekContainsDate") {
        result.firstWeekContainsDate = defaultOptions.firstWeekContainsDate;
      }
    }
  }

  for (const property in options) {
    if (Object.prototype.hasOwnProperty.call(options, property)) {
      const key = property as keyof DefaultOptions;

      if (key === "locale") {
        if (options.locale === undefined) {
          delete result.locale;
        } else {
          result.locale = options.locale;
        }
      } else if (key === "weekStartsOn") {
        if (options.weekStartsOn === undefined) {
          delete result.weekStartsOn;
        } else {
          result.weekStartsOn = options.weekStartsOn;
        }
      } else if (key === "firstWeekContainsDate") {
        if (options.firstWeekContainsDate === undefined) {
          delete result.firstWeekContainsDate;
        } else {
          result.firstWeekContainsDate = options.firstWeekContainsDate;
        }
      }
    }
  }

  setInternalDefaultOptions(result);
}
