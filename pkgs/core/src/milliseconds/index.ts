import {
  daysInYear,
  millisecondsInDay,
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
  millisecondsInWeek,
  monthsInYear,
} from "../constants/index.ts";
import type { Duration } from "../types.ts";

// Both are exact integers: 365.2425 * 86400000 = 31556952000, and that
// divided by 12 = 2629746000. Scaling days to milliseconds before applying
// the amount keeps whole durations free of binary floating point drift.
const millisecondsInYear = daysInYear * millisecondsInDay;
const millisecondsInMonth = millisecondsInYear / monthsInYear;

/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * @returns The milliseconds
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */
export function milliseconds({
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds,
}: Duration): number {
  let total = 0;

  if (years) total += years * millisecondsInYear;
  if (months) total += months * millisecondsInMonth;
  if (weeks) total += weeks * millisecondsInWeek;
  if (days) total += days * millisecondsInDay;
  if (hours) total += hours * millisecondsInHour;
  if (minutes) total += minutes * millisecondsInMinute;
  if (seconds) total += seconds * millisecondsInSecond;

  return Math.trunc(total);
}
