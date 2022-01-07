import toDate from '../toDate/index'
import differenceInCalendarYears from '../differenceInCalendarYears/index'
import compareAsc from '../compareAsc/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years to one date from another.
 *
 * @description
 * Get the number of full years to one date from another.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateTo - the target date
 * @param {Date|Number} dateFrom - the start date
 * @returns {Number} the number of full years from dateFrom to dateTo
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export default function differenceInYears(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  requiredArgs(2, arguments)

  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  const sign = compareAsc(dateLeft, dateRight)
  const difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  dateLeft.setFullYear(1584)
  dateRight.setFullYear(1584)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  const result = sign * (difference - Number(isLastYearNotFull))
  // Prevent negative zero
  return result === 0 ? 0 : result
}
