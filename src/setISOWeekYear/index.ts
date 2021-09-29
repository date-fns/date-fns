import constructFrom from '../constructFrom/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import startOfISOWeekYear from '../startOfISOWeekYear/index'
import toDate from '../toDate/index'

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
export default function setISOWeekYear<DateType extends Date>(
  dirtyDate: DateType | number,
  isoWeekYear: number
): DateType {
  let date = toDate(dirtyDate)
  const diff = differenceInCalendarDays(date, startOfISOWeekYear(date))
  const fourthOfJanuary = constructFrom(dirtyDate, 0)
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOWeekYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}
