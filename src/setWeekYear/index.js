import toDate from '../toDate/index.js'
import startOfWeekYear from '../startOfWeekYear/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'

/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the local week-numbering year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> Sat Jan 01 2005 00:00:00
 */
export default function setWeekYear (dirtyDate, dirtyWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate === undefined
      ? 1
      : Number(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate === undefined
      ? defaultFirstWeekContainsDate
      : Number(options.firstWeekContainsDate)

  var date = toDate(dirtyDate, dirtyOptions)
  var weekYear = Number(dirtyWeekYear)
  var diff = differenceInCalendarDays(date, startOfWeekYear(date, dirtyOptions), dirtyOptions)
  var firstWeek = new Date(0)
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  date = startOfWeekYear(firstWeek, dirtyOptions)
  date.setDate(date.getDate() + diff)
  return date
}
