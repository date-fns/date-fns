import toDate from '../toDate/index'
import isLeapYear from '../isLeapYear/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export default function getDaysInYear(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)

  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
  if (isNaN(date)) {
    return NaN
  }

  return isLeapYear(date) ? 366 : 365
}
