import getISOWeek from '../getISOWeek/index'

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - the date to be changed
 * @param isoWeek - the ISO week of the new date
 * @returns the new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
export default function setISOWeek(date: Date | number, week: number): Date {
  const result = new Date(date)
  const weekTransformed = Math.trunc(week)
  const diff = getISOWeek(result) - weekTransformed
  result.setDate(result.getDate() - diff * 7)
  return result
}
