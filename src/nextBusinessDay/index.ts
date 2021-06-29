import { isWeekend, addDays, toDate, isEqual, startOfDay } from "..";

/**
 * @name nextBusinessDay
 * @category Day Helpers
 * @summary Returns the next business day
 *
 * @description Returns the next business day (Mon - Fri)
 *
 * @param {Date|Number} date - the initial date
 * @param {Number} [startFromDay=0] - The day that it starts to count, the
 * default is zero. So if the date is on a Monday it will return the current
 * date. To start counting from the next date set this to one.
 * @param {[Date]} excludeDates - An array of holidays or other dates that
 * should not be identified as business days
 *
 * @returns {Date} the next business day
 *
 * @throws {TypeError} startFrom can't be a negative number
 *
 *
 * @example
 * // returns the next business date from  Sun July 4th, 2021
 * const date = nextBusinessDay(new Date(2021, 6, 4));
 * // => Mon Jul 4 2021 00:00:00
 *
 * // returns the next business day and skip the holidays
 * especified on the excludeDates param
 * const holidays = [new Date(2021, 8, 7)] // September 7h - Brazil Independence Day
 * const date = nextBusinessDay(new Date(2021, 8, 6), 1, holidays)
 * // => Wed Sep 8 2021 00:00:00
 */

export default function nextBusinessDay(
  dirtyDate: Date,
  startFromDay = 0,
  excludeDates: Array<Date> = [],
): Date {
  const date = startOfDay(toDate(dirtyDate));

  if (startFromDay < 0) throw new TypeError("startFrom can't be a negative number");

  const initialDate = startFromDay ? addDays(date, startFromDay) : date;

  const isOnTheExcludeDatesList = () => {
    if (excludeDates.length === 0) return false;

    const isPresent = excludeDates.reduce((prev, current): boolean => {
      return isEqual(initialDate, startOfDay(current)) || prev;
    }, false);

    return isPresent;
  };

  if (!isWeekend(initialDate) && !isOnTheExcludeDatesList()) return initialDate;

  return nextBusinessDay(addDays(initialDate, 1));
}
