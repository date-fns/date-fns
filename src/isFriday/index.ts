import toDate from '../toDate/index'

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param date - the date to check
 * @returns the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
export default function isFriday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return toDate(dirtyDate).getDay() === 5
}
