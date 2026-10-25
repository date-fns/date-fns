import type { Duration } from "../types.ts";

const SEC_PER_MIN = 60;
const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const DAY_PER_WEEK = 7;
const MONTH_PER_YEAR = 12;

/**
 * @name normalizeDuration
 * @category Duration Helpers
 * @summary Normalize a duration by carrying overflow units upward
 *
 * @description
 * Normalize a {@link Duration} so that each unit's value is within its
 * natural range, carrying overflow into the next larger unit. For example,
 * `{ months: 13 }` becomes `{ years: 1, months: 1 }` and
 * `{ seconds: 3661 }` becomes `{ hours: 1, minutes: 1, seconds: 1 }`.
 *
 * The carry chain is: seconds → minutes (60), minutes → hours (60),
 * hours → days (24), days → weeks (7), and separately months → years (12).
 * Weeks are **not** carried into months because the weeks-per-month ratio is
 * not constant. A unit present in the input is present in the output (even if
 * it normalizes to 0); units that only receive a carry are also set.
 *
 * Designed for non-negative durations; behaviour for negative values is
 * determined by JavaScript's `%` and `Math.floor` but is not part of the
 * public contract.
 *
 * @param duration - The duration to normalize
 *
 * @returns A new normalized Duration
 *
 * @example
 * const result = normalizeDuration({ months: 13 })
 * //=> { years: 1, months: 1 }
 *
 * @example
 * const result = normalizeDuration({ seconds: 3661 })
 * //=> { hours: 1, minutes: 1, seconds: 1 }
 *
 * @example
 * const result = normalizeDuration({ days: 8 })
 * //=> { weeks: 1, days: 1 }
 */
export function normalizeDuration(duration: Duration): Duration {
  const result: Duration = {};
  let carry = 0;

  // seconds → minutes (60)
  if (duration.seconds !== undefined) {
    const total = duration.seconds + carry;
    result.seconds = ((total % SEC_PER_MIN) + SEC_PER_MIN) % SEC_PER_MIN;
    carry = Math.floor(total / SEC_PER_MIN);
  }
  // minutes → hours (60)
  if (duration.minutes !== undefined) {
    const total = duration.minutes + carry;
    result.minutes = ((total % MIN_PER_HOUR) + MIN_PER_HOUR) % MIN_PER_HOUR;
    carry = Math.floor(total / MIN_PER_HOUR);
  } else if (carry !== 0) {
    const total = carry;
    result.minutes = ((total % MIN_PER_HOUR) + MIN_PER_HOUR) % MIN_PER_HOUR;
    carry = Math.floor(total / MIN_PER_HOUR);
  }
  // hours → days (24)
  if (duration.hours !== undefined) {
    const total = duration.hours + carry;
    result.hours = ((total % HOUR_PER_DAY) + HOUR_PER_DAY) % HOUR_PER_DAY;
    carry = Math.floor(total / HOUR_PER_DAY);
  } else if (carry !== 0) {
    const total = carry;
    result.hours = ((total % HOUR_PER_DAY) + HOUR_PER_DAY) % HOUR_PER_DAY;
    carry = Math.floor(total / HOUR_PER_DAY);
  }
  // days → weeks (7)
  if (duration.days !== undefined) {
    const total = duration.days + carry;
    result.days = ((total % DAY_PER_WEEK) + DAY_PER_WEEK) % DAY_PER_WEEK;
    carry = Math.floor(total / DAY_PER_WEEK);
  } else if (carry !== 0) {
    const total = carry;
    result.days = ((total % DAY_PER_WEEK) + DAY_PER_WEEK) % DAY_PER_WEEK;
    carry = Math.floor(total / DAY_PER_WEEK);
  }
  // weeks — top of the time/day chain; no carry to months (ratio not constant)
  if (duration.weeks !== undefined || carry !== 0) {
    result.weeks = (duration.weeks ?? 0) + carry;
    carry = 0;
  }
  // Reset carry between the "day/week" group and the "month/year" group.
  carry = 0;
  // months → years (12) — independent of the time chain
  if (duration.months !== undefined) {
    const total = duration.months + carry;
    result.months = ((total % MONTH_PER_YEAR) + MONTH_PER_YEAR) % MONTH_PER_YEAR;
    carry = Math.floor(total / MONTH_PER_YEAR);
  }
  // years — top of the chain
  if (duration.years !== undefined || carry !== 0) {
    result.years = (duration.years ?? 0) + carry;
    carry = 0;
  }
  return result;
}