import toDate from '../toDate/index'

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
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
export default function isWeekend<DateType extends Date>(
  date: DateType | number
): boolean {
  const convertedDate = toDate(date)
  const day = convertedDate.getDay()
  return day === 0 || day === 6
}
