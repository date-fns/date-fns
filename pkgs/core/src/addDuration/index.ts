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
 * @name addDuration
 * @category Duration Helpers
 * @summary Adds two durations component-wise (lossless, no normalisation/carry).
 *
 * @description
 * Adds each unit of `durationB` to the corresponding unit of `durationA`, so the
 * result is the per-unit sum (no carry between units — e.g. `{ seconds: 70 }`
 * + `{ seconds: 30 }` stays `{ seconds: 100 }`, not `{ minutes: 1, seconds: 10 }`).
 * See issue #3695. A unit is included in the result when it appears in either
 * input.
 *
 * @param durationA - The base duration.
 * @param durationB - The duration to add to `durationA`.
 * @returns The component-wise sum (lossless).
 *
 * @example
 * addDuration({ days: 1, hours: 2 }, { days: 3, minutes: 5 })
 * // { days: 4, hours: 2, minutes: 5 }
 * @example
 * addDuration({ seconds: 70 }, { seconds: 30 }) // { seconds: 100 } (no carry)
 */
export function addDuration(durationA: Duration, durationB: Duration): Duration {
  const result: Duration = {};
  for (const unit of DURATION_UNITS) {
    const a = durationA[unit] ?? 0;
    const b = durationB[unit] ?? 0;
    const sum = a + b;
    if (durationA[unit] !== undefined || durationB[unit] !== undefined) {
      result[unit] = sum;
    }
  }
  return result;
}

/**
 * @name subDuration
 * @category Duration Helpers
 * @summary Subtracts `durationB` from `durationA` component-wise (lossless).
 *
 * @description
 * Subtracts each unit of `durationB` from the corresponding unit of
 * `durationA` per-unit (no carry between units), the inverse of
 * {@link addDuration}. See issue #3695.
 *
 * @param durationA - The duration to subtract from.
 * @param durationB - The duration to subtract.
 * @returns The component-wise difference (lossless).
 *
 * @example
 * subDuration({ days: 5 }, { days: 2 }) // { days: 3 }
 * @example
 * subDuration({ days: 1 }, { days: 3 }) // { days: -2 }
 */
export function subDuration(durationA: Duration, durationB: Duration): Duration {
  const result: Duration = {};
  for (const unit of DURATION_UNITS) {
    const a = durationA[unit] ?? 0;
    const b = durationB[unit] ?? 0;
    const diff = a - b;
    if (durationA[unit] !== undefined || durationB[unit] !== undefined) {
      result[unit] = diff;
    }
  }
  return result;
}