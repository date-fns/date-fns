/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - the date to check
 * @returns the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
export default function isTuesday(date: Date | number): boolean {
  return new Date(date).getDay() === 2
}
