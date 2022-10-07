import compareAsc from '../compareAsc/index'
import differenceInCalendarISOWeekYears from '../differenceInCalendarISOWeekYears/index'
import subISOWeekYears from '../subISOWeekYears/index'
import toDate from '../toDate/index'

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
export default function differenceInISOWeekYears<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number
): number {
  let convertedDateLeft = toDate(dateLeft)
  const convertedDateRight = toDate(dateRight)

  const sign = compareAsc(convertedDateLeft, convertedDateRight)
  const difference = Math.abs(
    differenceInCalendarISOWeekYears(convertedDateLeft, convertedDateRight)
  )
  convertedDateLeft = subISOWeekYears(convertedDateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastISOWeekYearNotFull = Number(
    compareAsc(convertedDateLeft, convertedDateRight) === -sign
  )
  const result = sign * (difference - isLastISOWeekYearNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
