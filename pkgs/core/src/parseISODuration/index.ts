import type { Duration } from "../types.ts";

const ISO_DURATION_RE =
  /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;

/**
 * @name parseISODuration
 * @category Common Helpers
 * @summary Parse an ISO 8601 duration string into a Duration object.
 *
 * @description
 * Parses an ISO 8601 duration string (the reverse of {@link formatISODuration})
 * such as `P3Y6M4DT12H30M5S` into a Duration object. Supports years, months,
 * weeks, days, hours, minutes, and seconds. Units whose value is 0/absent are
 * omitted from the result, except when explicitly written (e.g. `P0Y` yields
 * `years: 0`). See issue #3150.
 *
 * @param duration - The ISO 8601 duration string (e.g. `P1Y2M3DT4H5M6S`).
 * @returns The parsed Duration.
 * @throws {RangeError} if the string is not a valid ISO 8601 duration.
 *
 * @example
 * // Parse the given ISO 8601 duration
 * const result = parseISODuration('P3Y6M4DT12H30M5S')
 * //=> { years: 3, months: 6, days: 4, hours: 12, minutes: 30, seconds: 5 }
 *
 * @example
 * parseISODuration('P1M') //=> { months: 1 }
 */
export function parseISODuration(duration: string): Duration {
  const match = duration.match(ISO_DURATION_RE);
  if (!match) {
    throw new RangeError("Invalid ISO 8601 duration: " + duration);
  }

  const [
    ,
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  ] = match;

  const hasAnyUnit =
    years !== undefined ||
    months !== undefined ||
    weeks !== undefined ||
    days !== undefined ||
    hours !== undefined ||
    minutes !== undefined ||
    seconds !== undefined;
  if (!hasAnyUnit) {
    // `P` or `PT` with no units is not a valid ISO 8601 duration.
    throw new RangeError("Invalid ISO 8601 duration: " + duration);
  }

  const result: Duration = {};
  if (years !== undefined) {
    result.years = Number(years);
  }
  if (months !== undefined) {
    result.months = Number(months);
  }
  if (weeks !== undefined) {
    result.weeks = Number(weeks);
  }
  if (days !== undefined) {
    result.days = Number(days);
  }
  if (hours !== undefined) {
    result.hours = Number(hours);
  }
  if (minutes !== undefined) {
    result.minutes = Number(minutes);
  }
  if (seconds !== undefined) {
    result.seconds = Number(seconds);
  }

  return result;
}