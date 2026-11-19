import type { Duration } from "../types.ts";

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */
export function formatISODuration(duration: Duration): string {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // ISO 8601 does not allow combining weeks with any other unit, so a
  // duration of only weeks is formatted as `P<n>W`, and weeks are otherwise
  // folded into days (7 days per week) to preserve the total duration.
  if (
    weeks !== 0 &&
    years === 0 &&
    months === 0 &&
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds === 0
  ) {
    return `P${weeks}W`;
  }

  return `P${years}Y${months}M${days + weeks * 7}DT${hours}H${minutes}M${seconds}S`;
}
