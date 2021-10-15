/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param date - the date to check
 * @returns the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
export default function isWeekend(date: Date | number): boolean {
  const day = new Date(date).getDay()
  return day === 0 || day === 6
}
