import isSameWeek from '../isSameWeek/index'

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 */
export default function isSameISOWeek(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  return isSameWeek(dateLeft, dateRight, { weekStartsOn: 1 })
}
