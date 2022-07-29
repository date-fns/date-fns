import toDate from '../toDate/index'

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param date - the date to check
 * @returns the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
export default function isFirstDayOfMonth<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return toDate(dirtyDate).getDate() === 1
}
