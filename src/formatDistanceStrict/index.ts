import { getDefaultOptions } from '../_lib/defaultOptions/index'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'
import compareAsc from '../compareAsc/index'
import toDate from '../toDate/index'
import cloneObject from '../_lib/cloneObject/index'
import assign from '../_lib/assign/index'
import defaultLocale from '../_lib/defaultLocale/index'
import requiredArgs from '../_lib/requiredArgs/index'
import type { FormatDistanceStrictOptions, LocaleOptions } from '../types'

const MILLISECONDS_IN_MINUTE = 1000 * 60
const MINUTES_IN_DAY = 60 * 24
const MINUTES_IN_MONTH = MINUTES_IN_DAY * 30
const MINUTES_IN_YEAR = MINUTES_IN_DAY * 365

/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

export default function formatDistanceStrict(
  dirtyDate: Date | number,
  dirtyBaseDate: Date | number,
  options?: LocaleOptions & FormatDistanceStrictOptions
): string {
  requiredArgs(2, arguments)

  const defaultOptions = getDefaultOptions()
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property')
  }

  const comparison = compareAsc(dirtyDate, dirtyBaseDate)

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value')
  }

  const localizeOptions = assign(cloneObject(options), {
    addSuffix: Boolean(options?.addSuffix),
    comparison: comparison as -1 | 0 | 1,
  })

  let dateLeft
  let dateRight
  if (comparison > 0) {
    dateLeft = toDate(dirtyBaseDate)
    dateRight = toDate(dirtyDate)
  } else {
    dateLeft = toDate(dirtyDate)
    dateRight = toDate(dirtyBaseDate)
  }

  const roundingMethod = String(options?.roundingMethod ?? 'round')
  let roundingMethodFn

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'")
  }

  const milliseconds = dateRight.getTime() - dateLeft.getTime()
  const minutes = milliseconds / MILLISECONDS_IN_MINUTE

  const timezoneOffset =
    getTimezoneOffsetInMilliseconds(dateRight) -
    getTimezoneOffsetInMilliseconds(dateLeft)

  // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.
  const dstNormalizedMinutes =
    (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE

  const defaultUnit = options?.unit
  let unit
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = 'second'
    } else if (minutes < 60) {
      unit = 'minute'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour'
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day'
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month'
    } else {
      unit = 'year'
    }
  } else {
    unit = String(defaultUnit)
  }

  // 0 up to 60 seconds
  if (unit === 'second') {
    const seconds = roundingMethodFn(milliseconds / 1000)
    return locale.formatDistance('xSeconds', seconds, localizeOptions)

    // 1 up to 60 mins
  } else if (unit === 'minute') {
    const roundedMinutes = roundingMethodFn(minutes)
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions)

    // 1 up to 24 hours
  } else if (unit === 'hour') {
    const hours = roundingMethodFn(minutes / 60)
    return locale.formatDistance('xHours', hours, localizeOptions)

    // 1 up to 30 days
  } else if (unit === 'day') {
    const days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY)
    return locale.formatDistance('xDays', days, localizeOptions)

    // 1 up to 12 months
  } else if (unit === 'month') {
    const months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH)
    return months === 12 && defaultUnit !== 'month'
      ? locale.formatDistance('xYears', 1, localizeOptions)
      : locale.formatDistance('xMonths', months, localizeOptions)

    // 1 year up to max Date
  } else if (unit === 'year') {
    const years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR)
    return locale.formatDistance('xYears', years, localizeOptions)
  }

  throw new RangeError(
    "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
  )
}
