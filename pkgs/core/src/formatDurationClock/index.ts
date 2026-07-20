import type { Duration, DurationUnit } from "../types.ts";

/**
 * The units a clock can show, in descending order.
 */
type ClockUnit = "days" | "hours" | "minutes" | "seconds";

interface FormatDurationClockOptions {
  /**
   * The units to show, from largest to smallest. The largest listed unit is
   * rendered unbounded; the rest are zero-padded to two digits. Weeks are not
   * supported directly — convert them to days first.
   *
   * @default `['hours', 'minutes', 'seconds']`
   */
  format?: readonly ClockUnit[];
  /**
   * The separator between units.
   * @default ':'
   */
  delimiter?: string;
}

const CLOCK_UNITS: ClockUnit[] = ["days", "hours", "minutes", "seconds"];

/**
 * @name formatDurationClock
 * @category Duration Helpers
 * @summary Format a duration as a zero-padded clock string (e.g. `1:23:45`)
 *
 * @description
 * Format a {@link Duration} as a locale-free, zero-padded clock string such as
 * `1:23:45` or `02:03:04`, without pulling heavyweight locale data (unlike
 * {@link formatDuration}). See issue #3893.
 *
 * By default it renders `H:MM:SS` from the `hours`, `minutes` and `seconds`
 * fields (hours unbounded, minutes/seconds zero-padded). Pass `format` to
 * include `days` (e.g. `['days','hours','minutes','seconds']` → `1:02:03:04`)
 * and `delimiter` to change the separator. Only the listed units are used;
 * `years`, `months` and `weeks` are ignored (convert weeks to days first if
 * needed). A unit absent from the duration counts as 0.
 *
 * @param duration - The duration to format
 * @param options - Formatting options
 *
 * @returns The formatted clock string
 *
 * @example
 * formatDurationClock({ hours: 1, minutes: 23, seconds: 45 }) // '1:23:45'
 * @example
 * formatDurationClock({ minutes: 5, seconds: 3 }) // '0:05:03'
 * @example
 * formatDurationClock({ days: 1, hours: 2, minutes: 3, seconds: 4 }, { format: ['days','hours','minutes','seconds'] }) // '1:02:03:04'
 */
export function formatDurationClock(
  duration: Duration,
  options: FormatDurationClockOptions = {},
): string {
  const format = options.format ?? (["hours", "minutes", "seconds"] as ClockUnit[]);
  const delimiter = options.delimiter ?? ":";

  return format
    .map((unit, i) => {
      const value = duration[unit as DurationUnit] ?? 0;
      const str = String(value);
      // The largest (first) listed unit is unbounded; the rest are zero-padded.
      return i === 0 ? str : str.padStart(2, "0");
    })
    .join(delimiter);
}