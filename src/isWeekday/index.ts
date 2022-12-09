import toDate from '../toDate/index'

/**
 * @name isWeekday
 * @category Weekday Helpers
 * @summary Is the given date a weekday?
 *
 * @description
 * Is the given date a weekday?
 *
 * @param date - the date to check
 * @returns the date is in weekdays
 *
 * @example
 * // Is 6 October 2014 a weekday?
 * const result = isWeekday(new Date(2014, 9, 6))
 * //=> true
 */
export default function isWeekday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  const day = date.getDay()
  const WEEKDAY_DAY_OF_WEEK_LIST = [1, 2, 3, 4, 5]
  return WEEKDAY_DAY_OF_WEEK_LIST.includes(day)
}
