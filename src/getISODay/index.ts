/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the given date
 * @returns the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
export default function getISODay(date: Date | number): number {
  let day = new Date(date).getDay()

  if (day === 0) {
    day = 7
  }

  return day
}
