import compareAsc from '../compareAsc/index'
import { minutesInDay, minutesInMonth } from '../constants/index'
import differenceInMonths from '../differenceInMonths/index'
import differenceInSeconds from '../differenceInSeconds/index'
import toDate from '../toDate/index'
import type { LocaleOptions } from '../types'
import assign from '../_lib/assign/index'
import cloneObject from '../_lib/cloneObject/index'
import defaultLocale from '../_lib/defaultLocale/index'
import { getDefaultOptions } from '../_lib/defaultOptions/index'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'

/**
 * The {@link formatDistance} function options.
 */
export interface FormatDistanceOptions extends LocaleOptions {
  includeSeconds?: boolean
  addSuffix?: boolean
}

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param date - the date
 * @param baseDate - the date to compare with
 * @param options - an object with options.
 * @returns the distance in words
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

export default function formatDistance<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyBaseDate: DateType | number,
  options?: FormatDistanceOptions
): string {
  const defaultOptions = getDefaultOptions()
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale
  const minutesInAlmostTwoDays = 2520

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property')
  }

  const comparison = compareAsc(dirtyDate, dirtyBaseDate)

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value')
  }

  const localizeOptions = assign(cloneObject(options), {
    addSuffix: options?.addSuffix,
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

  const seconds = differenceInSeconds(dateRight, dateLeft)
  const offsetInSeconds =
    (getTimezoneOffsetInMilliseconds(dateRight) -
      getTimezoneOffsetInMilliseconds(dateLeft)) /
    1000
  const minutes = Math.round((seconds - offsetInSeconds) / 60)
  let months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions)
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions)
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions)
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions)
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions)

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions)

    // 1.5 hrs up to 24 hrs
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60)
    return locale.formatDistance('aboutXHours', hours, localizeOptions)

    // 1 day up to 1.75 days
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance('xDays', 1, localizeOptions)

    // 1.75 days up to 30 days
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay)
    return locale.formatDistance('xDays', days, localizeOptions)

    // 1 month up to 2 months
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth)
    return locale.formatDistance('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth)
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions)

    // 1 year up to max Date
  } else {
    const monthsSinceStartOfYear = months % 12
    const years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions)

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions)

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions)
    }
  }
}
