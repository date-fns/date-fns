import startOfISOWeekYear from '../startOfISOWeekYear/index'

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
export default function isSameISOWeekYear<DateType extends Date>(
  dirtyDateLeft: DateType | number,
  dirtyDateRight: DateType | number
): boolean {
  const dateLeftStartOfYear = startOfISOWeekYear(dirtyDateLeft)
  const dateRightStartOfYear = startOfISOWeekYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}
