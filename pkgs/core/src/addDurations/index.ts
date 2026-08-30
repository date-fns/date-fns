import type { Duration, DurationUnit } from "../types.ts";

const DURATION_UNITS: DurationUnit[] = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
];

/**
 * @name addDurations
 * @category Duration Helpers
 * @summary Add two durations together
 *
 * @description
 * Add two {@link Duration} objects together, component-wise. Each unit in the
 * result is the sum of that unit in both durations; a unit present in either
 * input is present in the result (even if the sum is 0). A unit absent from
 * both inputs is absent from the result. No normalization or carry is
 * performed (e.g. 70 minutes stays 70 minutes); use the date-arithmetic
 * helpers for that.
 *
 * @param duration1 - The first duration
 * @param duration2 - The second duration
 *
 * @returns A new Duration with each unit summed
 *
 * @example
 * const result = addDurations(
 *   { hours: 2, minutes: 30 },
 *   { hours: 1, minutes: 15 }
 * )
 * //=> { hours: 3, minutes: 45 }
 *
 * @example
 * // Units present in only one input are preserved
 * const result = addDurations({ hours: 2 }, { minutes: 30 })
 * //=> { hours: 2, minutes: 30 }
 */
export function addDurations(
  duration1: Duration,
  duration2: Duration,
): Duration {
  const result: Duration = {};
  for (const unit of DURATION_UNITS) {
    const has1 = duration1[unit] !== undefined;
    const has2 = duration2[unit] !== undefined;
    if (has1 || has2) {
      const v1 = duration1[unit] ?? 0;
      const v2 = duration2[unit] ?? 0;
      result[unit] = v1 + v2;
    }
  }
  return result;
}

/**
 * @name scaleDuration
 * @category Duration Helpers
 * @summary Multiply a duration by a scalar
 *
 * @description
 * Multiply every unit of a {@link Duration} by a scalar number. Each unit
 * present in the input is multiplied in place; units absent from the input
 * remain absent. No normalization or carry is performed. A scale of 0 zeroes
 * every present unit (but keeps them present), a scale of -1 negates them, and
 * a scale of 2 doubles them.
 *
 * @param duration - The duration to scale
 * @param scale - The scalar multiplier
 *
 * @returns A new Duration with each unit multiplied by the scalar
 *
 * @example
 * const result = scaleDuration({ hours: 2, minutes: 30 }, 2)
 * //=> { hours: 4, minutes: 60 }
 *
 * @example
 * const result = scaleDuration({ hours: 5, minutes: 15 }, -1)
 * //=> { hours: -5, minutes: -15 }
 */
export function scaleDuration(
  duration: Duration,
  scale: number,
): Duration {
  const result: Duration = {};
  for (const unit of DURATION_UNITS) {
    if (duration[unit] !== undefined) {
      result[unit] = (duration[unit] as number) * scale;
    }
  }
  return result;
}