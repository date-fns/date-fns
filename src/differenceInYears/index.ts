import compareAsc from '../compareAsc/index'
import differenceInCalendarYears from '../differenceInCalendarYears/index'
import toDate from '../toDate/index'

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
export default function differenceInYears<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): number {
  const convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)

  const sign = compareAsc(convertedDateLeft, convertedDateRight)
  const difference = Math.abs(
    differenceInCalendarYears(convertedDateLeft, convertedDateRight)
  )

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  convertedDateLeft.setFullYear(1584)
  convertedDateRight.setFullYear(1584)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastYearNotFull =
    compareAsc(convertedDateLeft, convertedDateRight) === -sign
  const result = sign * (difference - Number(isLastYearNotFull))
  // Prevent negative zero
  return result === 0 ? 0 : result
}
