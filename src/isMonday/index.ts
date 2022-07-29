import toDate from '../toDate/index'

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param date - the date to check
 * @returns the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
export default function isMonday<DateType extends Date>(
  date: ReadonlyDate<DateType> | number
): boolean {
  return toDate(date).getDay() === 1
}
