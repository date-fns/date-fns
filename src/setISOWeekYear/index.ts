import differenceInCalendarDays from '../differenceInCalendarDays/index'
import startOfISOWeekYear from '../startOfISOWeekYear/index'

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *
 * @param date - the date to be changed
 * @param year - the ISO week-numbering year of the new date
 * @returns the new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
export default function setISOWeekYear(
  date: Date | number,
  year: number
): Date {
  let result = new Date(date)
  const isoWeekYear = Math.trunc(year)
  const diff = differenceInCalendarDays(result, startOfISOWeekYear(result))
  const fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  result = startOfISOWeekYear(fourthOfJanuary)
  result.setDate(result.getDate() + diff)
  return result
}
