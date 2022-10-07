import compareAsc from '../compareAsc/index'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index'
import isLastDayOfMonth from '../isLastDayOfMonth/index'
import toDate from '../toDate/index'

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
export default function differenceInMonths<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): number {
  const convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)

  const sign = compareAsc(convertedDateLeft, convertedDateRight)
  const difference = Math.abs(
    differenceInCalendarMonths(convertedDateLeft, convertedDateRight)
  )
  let result

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0
  } else {
    if (
      convertedDateLeft.getMonth() === 1 &&
      convertedDateLeft.getDate() > 27
    ) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      convertedDateLeft.setDate(30)
    }

    convertedDateLeft.setMonth(convertedDateLeft.getMonth() - sign * difference)

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    let isLastMonthNotFull =
      compareAsc(convertedDateLeft, convertedDateRight) === -sign

    // Check for cases of one full calendar month
    if (
      isLastDayOfMonth(toDate(dateLeft)) &&
      difference === 1 &&
      compareAsc(dateLeft, convertedDateRight) === 1
    ) {
      isLastMonthNotFull = false
    }

    result = sign * (difference - Number(isLastMonthNotFull))
  }

  // Prevent negative zero
  return result === 0 ? 0 : result
}
