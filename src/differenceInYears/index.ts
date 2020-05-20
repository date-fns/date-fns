import toDate from '../toDate/index.js'
import differenceInCalendarYears from '../differenceInCalendarYears/index.js'
import compareAsc from '../compareAsc/index.js'

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @returns The number of full years
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
  const result = sign * (difference - (isLastYearNotFull ? 1 : 0))
  // Prevent negative zero
  return result === 0 ? 0 : result
}
