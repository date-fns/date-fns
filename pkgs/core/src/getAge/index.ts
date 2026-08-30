import { intervalToDuration } from "../intervalToDuration/index.js";

/**
 * @name getAge
 * @category Interval Helpers
 * @summary Returns the exact calendar age of `dateOfBirth` as of `today` (or now),
 * broken into years, months, and days.
 *
 * @description
 * Computes the calendar-accurate age of a person (or thing) — e.g.
 * `22 years 6 months 27 days` — accounting for varying month lengths (28–31
 * days) and leap years, unlike naive 365-day/30-day approximations. Built on
 * {@link intervalToDuration}. See issue #840.
 *
 * @param dateOfBirth - The date of birth.
 * @param options - Optional `{ today }` reference date (defaults to the current
 * time). Pass a fixed `today` for deterministic results.
 * @returns An object with `years`, `months`, and `days`. If `today` is on or
 * before `dateOfBirth`, all values are `0`.
 *
 * @example
 * // Exact age as of a reference date
 * getAge(new Date(2000, 0, 1), { today: new Date(2022, 6, 28) })
 * //=> { years: 22, months: 6, days: 27 }
 */
export function getAge(
  dateOfBirth: Date,
  options: { today?: Date | number | string } = {},
): { years: number; months: number; days: number } {
  const todayRaw = options.today ?? Date.now();
  const today = todayRaw instanceof Date ? todayRaw : new Date(todayRaw);

  if (today.getTime() <= dateOfBirth.getTime()) {
    return { years: 0, months: 0, days: 0 };
  }

  const duration = intervalToDuration({ start: dateOfBirth, end: today });

  return {
    years: duration.years ?? 0,
    months: duration.months ?? 0,
    days: duration.days ?? 0,
  };
}