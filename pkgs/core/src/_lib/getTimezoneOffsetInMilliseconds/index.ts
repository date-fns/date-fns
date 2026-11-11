import { toDate } from "../../toDate/index.ts";
import type { DateArg } from "../../types.ts";

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
export function getTimezoneOffsetInMilliseconds(
  date: DateArg<Date> & {},
): number {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      0,
      0,
      1,
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  // Date.UTC maps years 0-99 to 1900-1999, so set the calendar fields
  // together after construction to preserve leap days in those years.
  utcDate.setUTCFullYear(
    _date.getFullYear(),
    _date.getMonth(),
    _date.getDate(),
  );
  return +date - +utcDate;
}
