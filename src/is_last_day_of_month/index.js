import toDate from '../to_date/index.js'
import endOfDay from '../end_of_day/index.js'
import endOfMonth from '../end_of_month/index.js'

/**
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
 * */
export default function isLastDayOfMonth (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  return endOfDay(date, options).getTime() === endOfMonth(date, options).getTime()
}

