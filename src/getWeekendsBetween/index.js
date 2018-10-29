import toInteger from '../_lib/toInteger/index.js'
import eachDayOfInterval from '../eachDayOfInterval/index.js'
import isSunday from '../isSunday/index.js'
import isWeekend from '../isWeekend/index.js'

/**
 * @name getWeekendsBetween
 * @category Week Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Date|String|Number} dateStart - the start date
 * @param {Date|String|Number} dateEnd - the end date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Array} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * let result = getWeekendsBetween(
 *   {start: new Date(2022, 8, 17),
 *   end: new Date(2022, 8, 30)},
 *   {weekStartsOn: 2}
 * )
 * //=> ['Sat Sep 17 2022', 'Sun Sep 18 2022', 'Sat Sep 24 2022', 'Sun Sep 25 2022']
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * let result = getWeekendsBetween(
 *   {start: new Date('March 5, 2016'),
 *   end: new Date('March 19, 2016')},
 *   {weekStartsOn: 2}
 * )
 * //=> ['Sat Mar 05 2016', 'Sun Mar 06 2016, 'Sat Mar 12 2016', 'Sun Mar 13 2016', 'Sat Mar 19 2016']
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * let result = getWeekendsBetween(
 *   {start: new Date('March 25, 2016'),
 *   end: new Date('March 5, 2016')},
 *   {weekStartsOn: 2}
 * )
 * //=> []
 */

export default function getWeekendsBetween (dirtyInterval, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var interval = dirtyInterval || {}
  var dateInterval = eachDayOfInterval(interval)
  var weekends = []
  var index = 0
  while (index++ < dateInterval.length) {
    var date = dateInterval[index]
    if (isWeekend(date)) {
      weekends.push(new Date(date))
      if (isSunday(date)) {
        index = index + 5
      }
    }
  }
  return weekends
}
