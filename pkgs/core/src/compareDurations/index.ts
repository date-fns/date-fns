import type { Duration, DurationUnit } from "../types.js";

const DURATION_UNITS: ReadonlyArray<DurationUnit> = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
];

// Fixed per-unit conversions to seconds. For the unambiguous units
// (weeks/days/hours/minutes/seconds) these are exact; months and years use the
// standard astronomical averages (Gregorian year = 31556952 s).
const SECONDS_PER_UNIT: Record<DurationUnit, number> = {
  years: 31556952,
  months: 31556952 / 12,
  weeks: 7 * 24 * 60 * 60,
  days: 24 * 60 * 60,
  hours: 60 * 60,
  minutes: 60,
  seconds: 1,
};

type RoundingMethod = "floor" | "ceil" | "round" | "trunc";

const ROUNDERS: Record<RoundingMethod, (n: number) => number> = {
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  trunc: Math.trunc,
};

function durationToSeconds(duration: Duration, roundingMethod: RoundingMethod): number {
  let total = 0;
  for (const unit of DURATION_UNITS) {
    total += (duration[unit] ?? 0) * SECONDS_PER_UNIT[unit];
  }
  return ROUNDERS[roundingMethod](total);
}

/**
 * @name compareDurationsAsc
 * @category Duration Helpers
 * @summary Compares two durations by total magnitude, ascending.
 *
 * @description
 * Returns -1, 0, or 1 depending on whether `leftDuration` is shorter than,
 * equal to, or longer than `rightDuration`. Durations are compared by their
 * total length in seconds (years/months use astronomical averages), so e.g. 1
 * day equals 24 hours. See issue #3694.
 *
 * @param leftDuration - The left duration.
 * @param rightDuration - The right duration.
 * @param options - Optional rounding method for the seconds totals.
 *
 * @returns -1, 0, or 1.
 *
 * @example
 * compareDurationsAsc({ days: 1 }, { hours: 24 }) // 0 (equal)
 * @example
 * compareDurationsAsc({ days: 1 }, { hours: 23 }) // 1 (1 day > 23 hours)
 */
export function compareDurationsAsc(
  leftDuration: Duration,
  rightDuration: Duration,
  options: { roundingMethod?: RoundingMethod } = {},
): number {
  const roundingMethod = options.roundingMethod ?? "round";
  const left = durationToSeconds(leftDuration, roundingMethod);
  const right = durationToSeconds(rightDuration, roundingMethod);
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  return 0;
}

/**
 * @name compareDurationsDesc
 * @category Duration Helpers
 * @summary Compares two durations by total magnitude, descending.
 *
 * @description
 * The descending counterpart of {@link compareDurationsAsc}: returns 1, 0, or
 * -1 depending on whether `leftDuration` is shorter than, equal to, or longer
 * than `rightDuration`. Returns positive zero (not negative zero) for equal
 * magnitudes. See issue #3694.
 *
 * @param leftDuration - The left duration.
 * @param rightDuration - The right duration.
 * @param options - Optional rounding method for the seconds totals.
 *
 * @returns 1, 0, or -1.
 */
export function compareDurationsDesc(
  leftDuration: Duration,
  rightDuration: Duration,
  options: { roundingMethod?: RoundingMethod } = {},
): number {
  const result = compareDurationsAsc(leftDuration, rightDuration, options);
  return result === 0 ? 0 : -result;
}