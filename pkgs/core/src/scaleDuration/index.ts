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

/**
 * @name scaleDuration
 * @category Duration Helpers
 * @summary Scales each unit of a Duration by a multiplier (lossless, no carry).
 *
 * @description
 * Multiplies every present unit of `duration` by `multiplier` (e.g. "double" or
 * "halve" a duration), component-wise and without carrying between units. See
 * issue #2034. Units absent from `duration` are omitted from the result.
 *
 * @param duration - The duration to scale.
 * @param multiplier - The scalar to multiply each unit by.
 * @returns The scaled duration (lossless).
 *
 * @example
 * scaleDuration({ hours: 1, minutes: 30 }, 2) // { hours: 2, minutes: 60 }
 * @example
 * scaleDuration({ weeks: 1 }, 0.5) // { weeks: 0.5 }
 */
export function scaleDuration(duration: Duration, multiplier: number): Duration {
  const result: Duration = {};
  for (const unit of DURATION_UNITS) {
    if (duration[unit] !== undefined) {
      result[unit] = duration[unit]! * multiplier;
    }
  }
  return result;
}
