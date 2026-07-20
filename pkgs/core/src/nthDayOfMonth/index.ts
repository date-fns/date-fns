import { toDate } from "../toDate/index.ts";

/**
 * @name nthDayOfMonth
 * @category Month Helpers
 * @summary Get the nth occurrence of a weekday in a month
 *
 * @description
 * Return the date of the nth occurrence of a given weekday in the month of the
 * given reference date, useful for recurring events like "the 3rd Sunday of
 * the month". `dayOfWeek` is 0 (Sunday)–6 (Saturday), matching
 * {@link Date.getDay}. `n` is 1-based from the start of the month; a negative
 * `n` counts from the end (-1 is the last occurrence, -2 the second-to-last).
 * Returns `null` if the nth occurrence does not exist in the month (e.g. the
 * 5th Sunday when there are only four). See issue #780.
 *
 * @param date - The reference date (only its year and month are used)
 * @param dayOfWeek - The weekday to find, 0 (Sunday)–6 (Saturday)
 * @param n - The occurrence number, 1-based from the start (positive) or end (negative)
 *
 * @returns The Date of the nth occurrence, or `null` if it does not exist
 *
 * @example
 * // The 3rd Sunday of January 2025
 * const result = nthDayOfMonth(new Date(2025, 0, 1), 0, 3)
 * //=> Mon Jan 20 2025 (a Sunday)
 *
 * @example
 * // The last Friday of January 2025
 * const result = nthDayOfMonth(new Date(2025, 0, 1), 5, -1)
 * //=> Fri Jan 31 2025
 */
export function nthDayOfMonth(
  date: Date,
  dayOfWeek: number,
  n: number,
): Date | null {
  if (dayOfWeek < 0 || dayOfWeek > 6) {
    return null;
  }

  const reference = toDate(date);
  const year = reference.getFullYear();
  const month = reference.getMonth();

  // Day-of-month of the first occurrence of `dayOfWeek` in the month.
  const firstOfMonth = new Date(year, month, 1);
  const firstOccurrence = 1 + ((dayOfWeek - firstOfMonth.getDay() + 7) % 7);

  // Days in this month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let day: number;
  if (n > 0) {
    day = firstOccurrence + (n - 1) * 7;
  } else if (n < 0) {
    // Day-of-month of the last occurrence of `dayOfWeek` in the month.
    const lastOccurrence = firstOccurrence + Math.floor((daysInMonth - firstOccurrence) / 7) * 7;
    day = lastOccurrence + (n + 1) * 7;
  } else {
    return null;
  }

  if (day < 1 || day > daysInMonth) {
    return null;
  }

  return new Date(year, month, day);
}