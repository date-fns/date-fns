import getWeek from '../getWeek/index'
import toDate from '../toDate/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../types'

/**
 * The {@link setWeek} function options.
 */
export interface SetWeekOptions
  extends LocaleOptions,
    WeekStartOptions,
    FirstWeekContainsDateOptions {}

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param date - the date to be changed
 * @param week - the week of the new date
 * @param options - an object with options.
 * @returns the new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
export default function setWeek<DateType extends Date>(
  date: DateType | number,
  week: number,
  options?: SetWeekOptions
): DateType {
  const convertedDatee = toDate(date)
  const diff = getWeek(convertedDatee, options) - week
  convertedDatee.setDate(convertedDatee.getDate() - diff * 7)
  return convertedDatee
}
