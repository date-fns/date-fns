import {
  _defaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
  AllOptions,
} from '../_lib/defaultOptions/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options.
 * @pure false
 *
 * @description
 * Sets the defaults for `options` argument for all functions.
 *
 * @param {Object} newOptions - an object with options.
 * @param {Locale} [newOptions.locale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [newOptions.weekStartsOn] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [newOptions.firstWeekContainsDate] - the day of January, which is always in the first week of the year
 * @param {Boolean} [newOptions.inclusive] - used by [`areIntervalsOverlapping`]{@link https://date-fns.org/docs/areIntervalsOverlapping}
 * @param {Number} [newOptions.step] - used by `eachXOfInterval` functions
 * @param {Boolean} [newOptions.useAdditionalWeekYearTokens] - used by [`format`]{@link https://date-fns.org/docs/format},
 *   [`parse`]{@link https://date-fns.org/docs/parse} and [`isMatch`]{@link https://date-fns.org/docs/isMatch}
 * @param {Boolean} [newOptions.useAdditionalDayOfYearTokens] - ditto
 * @param {Boolean} [newOptions.includeSeconds] - used by [`formatDistance`]{@link https://date-fns.org/docs/formatDistance}
 * @param {Boolean} [newOptions.addSuffix] - used by `formatDistance...` functions
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [newOptions.unit] - used by [`formatDistanceStrict`]{@link https://date-fns.org/docs/formatDistanceStrict}
 * @param {'floor'|'ceil'|'round'|'trunc'} [newOptions.roundingMethod] - used by `differenceIn...` functions and
 *   [`formatDistanceStrict`]{@link https://date-fns.org/docs/formatDistanceStrict}
 * @param {boolean} [newOptions.zero] - used by [`formatDuration`]{@link https://date-fns.org/docs/formatDuration}
 * @param {string} [newOptions.delimiter] - used by [`formatDuration`]{@link https://date-fns.org/docs/formatDuration}
 * @param {'extended'|'basic'|string[]} [newOptions.format] - used by [`formatISO`]{@link https://date-fns.org/docs/formatISO},
 *   [`formatISO9075`]{@link https://date-fns.org/docs/formatISO9075} and [`formatDuration`]{@link https://date-fns.org/docs/formatDuration}
 * @param {'complete'|'date'|'time'} [newOptions.representation] - used by [`formatISO`]{@link https://date-fns.org/docs/formatISO}
 *   and [`formatISO9075`]{@link https://date-fns.org/docs/formatISO9075}
 * @param {0|1|2|3} [newOptions.fractionDigits] - used by [`formatRFC3339`]{@link https://date-fns.org/docs/formatRFC3339}
 * @param {0|1|2} [newOptions.additionalDigits] - used by [`toDate`]{@link https://date-fns.org/docs/toDate}
 * @param {Number} [newOptions.nearestTo] - used by [`toNearestMinute`]{@link https://date-fns.org/docs/toNearestMinute}
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
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 */
export default function setDefaultOptions(newOptions: AllOptions): void {
  requiredArgs(1, arguments)

  const result: AllOptions = {}

  for (const property in _defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(_defaultOptions, property)) {
      ;(result as any)[property] = _defaultOptions[property as keyof AllOptions]
    }
  }

  for (const property in newOptions) {
    if (Object.prototype.hasOwnProperty.call(newOptions, property)) {
      if (newOptions[property as keyof AllOptions] === undefined) {
        delete (result as any)[property]
      } else {
        ;(result as any)[property] = newOptions[property as keyof AllOptions]
      }
    }
  }

  setInternalDefaultOptions(result)
}
