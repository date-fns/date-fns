import toDate from '../toDate/index.js'
import endOfDay from '../endOfDay/index.js'
import endOfMonth from '../endOfMonth/index.js'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  return endOfDay(date, options).getTime() === endOfMonth(date, options).getTime()
}
