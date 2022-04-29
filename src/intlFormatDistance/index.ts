import { IntlOptionsUnit } from 'src/types'
import {
  secondsInDay,
  secondsInHour,
  secondsInMinute,
  secondsInMonth,
  secondsInQuarter,
  secondsInWeek,
  secondsInYear,
} from '../constants'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index'
import differenceInCalendarQuarters from '../differenceInCalendarQuarters/index'
import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index'
import differenceInCalendarYears from '../differenceInCalendarYears/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInSeconds from '../differenceInSeconds/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

interface Options {
  unit?: IntlOptionsUnit
  locale?: Intl.UnicodeBCP47LocaleIdentifier
  localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher
  numeric?: Intl.RelativeTimeFormatNumeric
  style?: Intl.RelativeTimeFormatStyle
}

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and either picks the most appropriate unit
 * depending on the distance (the less the distance the smaller the unit) or allows the user to specify a unit.
 * If the unit is specified, it will be applied accordingly. Otherwise - see the table below:
 *
 * |    Distance between dates   |         Result         |
 * |-----------------------------|------------------------|
 * |  0 seconds                  | now                    |
 * |  1 second                   | in 1 second            |
 * |  1 second ago               | 1 second ago           |
 * |  2-59 seconds               | in X seconds           |
 * |  60 seconds                 | in 1 minute            |
 * |  60 seconds ago             | 1 minute ago           |
 * |  1 minute                   | in 1 minute            |
 * |  1 minute ago               | 1 minute ago           |
 * |  2-59 minutes               | in X minutes           |
 * |  from 2 to 59 minutes ago   | X minutes ago          |
 * |  60 minutes                 | in 1 hour              |
 * |  60 minutes ago             | 1 hour ago             |
 * |  1 hour                     | in 1 hour              |
 * |  1 hour ago                 | 1 hour ago             |
 * |  2-23 hours                 | in X hours             |
 * |  from 2 to 23 hours ago     | X hours ago            |
 * |  24 hours                   | in 1 day               |
 * |  1 day                      | tomorrow               |
 * |  1 day ago                  | yesterday              |
 * |  2-6 days                   | in X days              |
 * |  from 2 to 6 days ago       | X days ago             |
 * |  7 days                     | next week              |
 * |  7 days ago                 | last week              |
 * |  X weeks                    | in X weeks             |
 * |  X weeks ago                | X weeks ago            |
 * |  1 month                    | next month             |
 * |  1 month ago                | last month             |
 * |  X months                   | in X months            |
 * |  X months ago               | X months ago           |
 * |  1 quarter                  | next quarter           |
 * |  1 quarter                  | last quarter           |
 * |  X quarters                 | in X quarters          |
 * |  X quarters ago             | X quarters ago         |
 * |  1 year                     | next year              |
 * |  1 year ago                 | last year              |
 * |  X years                    | in X years             |
 * |  X years ago                | X years ago            |
 *
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with.
 * @param {Object} [options] - an object with options.
 * @param {String} [options.unit] - formats the distance with the given unit ('year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second').
 * @param {String|String[]} [options.locale] - the locale to use.
 * @param {String} [options.localeMatcher='best fit'] - the locale matching algorithm to use. Other value: 'lookup'.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * @param {String} [options.numeric='auto'] - the output message format. The values are 'auto' (e.g. `yesterday`), 'always'(e.g. `1 day ago`).
 * @param {String} [options.style='long'] - the length of the result. The values are: 'long' (e.g. `1 month`), 'short' (e.g. 'in 1 mo.'), 'narrow' (e.g. 'in 1 mo.').
 * The narrow one could be similar to the short one for some locales.
 * @returns {String} the distance in words according to language-sensitive relative time formatting.
 * @throws {TypeError} 2 arguments required
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
 * // The option represents the unit which will be used for the result calculation.
 * // What is the distance in quarters between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1987, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 4 quarters'
 *
 * @example
 * // The options represent the unit and the locale which will be used for the result representation and calculation.
 * // What is the distance in Spanish in minutes between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'minute', locale: 'es' }
 * )
 * //=> 'dentro de 60 minutos'
 *
 * @example
 * // The option represents the numeric format which will be used for the result representation.
 * // What is the distance in numeric format between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // The option represents the style format which will be used for the result representation.
 * // What is the distance in short format between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */

export default function intlFormatDistance(
  date: Date | number,
  baseDate: Date | number,
  options?: Options
): string {
  requiredArgs(2, arguments)

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
      (value = differenceInHours(dateLeft, dateRight)) &&
      Math.abs(differenceInCalendarDays(dateLeft, dateRight)) < 1
    ) {
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
