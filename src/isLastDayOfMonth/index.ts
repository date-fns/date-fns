import endOfDay from '../endOfDay/index'
import endOfMonth from '../endOfMonth/index'
import toDate from '../toDate/index'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}
