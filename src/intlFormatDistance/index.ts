import {
  secondsInDay,
  secondsInHour,
  secondsInMinute,
  secondsInMonth,
  secondsInQuarter,
  secondsInWeek,
  secondsInYear,
} from '../constants/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index'
import differenceInCalendarQuarters from '../differenceInCalendarQuarters/index'
import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index'
import differenceInCalendarYears from '../differenceInCalendarYears/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInSeconds from '../differenceInSeconds/index'
import toDate from '../toDate/index'
import type { IntlOptionsUnit } from '../types'

/**
 * The {@link intlFormatDistance} function options.
 */
export interface IntlFormatDistanceOptions {
  unit?: IntlOptionsUnit
  locale?: Intl.BCP47LanguageTag
  localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher
  numeric?: Intl.RelativeTimeFormatNumeric
  style?: Intl.RelativeTimeFormatStyle
}

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param date - the date
 * @param baseDate - the date to compare with.
 * @param options - an object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 * @returns the distance in words according to language-sensitive relative time formatting.
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.unit` must not be invalid Unit
 * @throws {RangeError} `options.locale` must not be invalid locale
 * @throws {RangeError} `options.localeMatcher` must not be invalid localeMatcher
 * @throws {RangeError} `options.numeric` must not be invalid numeric
 * @throws {RangeError} `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
export default function intlFormatDistance<DateType extends Date>(
  date: DateType | number,
  baseDate: DateType | number,
  options?: IntlFormatDistanceOptions
): string {
  let value: number = 0
  let unit: Intl.RelativeTimeFormatUnit
  const dateLeft = toDate(date)
  const dateRight = toDate(baseDate)

  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = differenceInSeconds(dateLeft, dateRight) // The smallest unit

    if (Math.abs(diffInSeconds) < secondsInMinute) {
      value = differenceInSeconds(dateLeft, dateRight)
      unit = 'second'
    } else if (Math.abs(diffInSeconds) < secondsInHour) {
      value = differenceInMinutes(dateLeft, dateRight)
      unit = 'minute'
    } else if (
      Math.abs(diffInSeconds) < secondsInDay &&
      Math.abs(differenceInCalendarDays(dateLeft, dateRight)) < 1
    ) {
      value = differenceInHours(dateLeft, dateRight)
      unit = 'hour'
    } else if (
      Math.abs(diffInSeconds) < secondsInWeek &&
      (value = differenceInCalendarDays(dateLeft, dateRight)) &&
      Math.abs(value) < 7
    ) {
      unit = 'day'
    } else if (Math.abs(diffInSeconds) < secondsInMonth) {
      value = differenceInCalendarWeeks(dateLeft, dateRight)
      unit = 'week'
    } else if (Math.abs(diffInSeconds) < secondsInQuarter) {
      value = differenceInCalendarMonths(dateLeft, dateRight)
      unit = 'month'
    } else if (Math.abs(diffInSeconds) < secondsInYear) {
      if (differenceInCalendarQuarters(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = differenceInCalendarQuarters(dateLeft, dateRight)
        unit = 'quarter'
      } else {
        value = differenceInCalendarYears(dateLeft, dateRight)
        unit = 'year'
      }
    } else {
      value = differenceInCalendarYears(dateLeft, dateRight)
      unit = 'year'
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit
    if (unit === 'second') {
      value = differenceInSeconds(dateLeft, dateRight)
    } else if (unit === 'minute') {
      value = differenceInMinutes(dateLeft, dateRight)
    } else if (unit === 'hour') {
      value = differenceInHours(dateLeft, dateRight)
    } else if (unit === 'day') {
      value = differenceInCalendarDays(dateLeft, dateRight)
    } else if (unit === 'week') {
      value = differenceInCalendarWeeks(dateLeft, dateRight)
    } else if (unit === 'month') {
      value = differenceInCalendarMonths(dateLeft, dateRight)
    } else if (unit === 'quarter') {
      value = differenceInCalendarQuarters(dateLeft, dateRight)
    } else if (unit === 'year') {
      value = differenceInCalendarYears(dateLeft, dateRight)
    }
  }

  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    localeMatcher: options?.localeMatcher,
    numeric: options?.numeric || 'auto',
    style: options?.style,
  })

  return rtf.format(value, unit)
}
