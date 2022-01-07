import addDays from '../addDays/index'
import getISODay from '../getISODay/index'

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param date - the date to be changed
 * @param day - the day of the ISO week of the new date
 * @returns the new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setISODay(date: Date | number, day: number): Date {
  const dateTransformed = new Date(date)
  const dayTransformed = Math.trunc(day)
  const currentDay = getISODay(dateTransformed)
  const diff = dayTransformed - currentDay
  return addDays(dateTransformed, diff)
}
