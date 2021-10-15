/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - the date to check
 * @returns the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export default function isWednesday(date: Date | number): boolean {
  return new Date(date).getDay() === 3
}
