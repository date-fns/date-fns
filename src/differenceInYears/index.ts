import compareAsc from '../compareAsc/index'
import differenceInCalendarYears from '../differenceInCalendarYears/index'

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export default function differenceInYears(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  const dateLeftTransformed = new Date(dateLeft)
  const dateRightTransformed = new Date(dateRight)

  const sign = compareAsc(dateLeftTransformed, dateRightTransformed)
  const difference = Math.abs(
    differenceInCalendarYears(dateLeftTransformed, dateRightTransformed)
  )

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  dateLeftTransformed.setFullYear(1584)
  dateRightTransformed.setFullYear(1584)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastYearNotFull =
    compareAsc(dateLeftTransformed, dateRightTransformed) === -sign
  const result = sign * (difference - Number(isLastYearNotFull))
  // Prevent negative zero
  return result === 0 ? 0 : result
}
