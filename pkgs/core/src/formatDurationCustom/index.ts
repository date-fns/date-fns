import type { Duration, DurationUnit } from "../types.ts";

/**
 * A map of duration units to their custom labels. Only the units present in
 * the map are rendered, in the map's insertion order. The label is appended
 * directly to the unit's value (e.g. `{ hours: "h", minutes: "m" }` renders
 * `4h 30m`).
 */
export type DurationCustomLabels = Partial<Record<DurationUnit, string>>;

/**
 * @name formatDurationCustom
 * @category Common Helpers
 * @summary Format a duration using a custom per-unit label map
 *
 * @description
 * Format a {@link Duration} object using a custom map of unit → label. Only
 * the units present in the map are rendered, in the map's insertion order,
 * and the label is appended directly to each unit's value (so
 * `{ hours: "h", minutes: "m" }` renders `4h 30m`). This lets callers produce
 * a compact, formal duration string like `04h 30m`, `0 Std. 0 Min.` or
 * `51d 10h 32m` instead of the locale words produced by {@link formatDuration}.
 *
 * The resolution is set by which units are listed: a map of only `{ hours: "
 * hrs" }` rounds the whole duration to a single hours figure (e.g. `5 hrs`);
 * a map of `{ days: "d", hours: "h", minutes: "m" }` shows all three.
 *
 * @param duration - The duration to format
 * @param labels - A map of unit → label; only listed units are shown, in order
 * @param options - An object with options
 *
 * @returns The formatted duration string, or an empty string when no listed
 *   unit has a non-zero value (unless `zero` is set)
 *
 * @example
 * // Format 4 hours 30 minutes as a compact string
 * const result = formatDurationCustom(
 *   { hours: 4, minutes: 30 },
 *   { hours: 'h', minutes: 'm' }
 * )
 * //=> '4h 30m'
 *
 * @example
 * // Show only hours, rounded
 * const result = formatDurationCustom(
 *   { hours: 4, minutes: 30 },
 *   { hours: ' hrs' }
 * )
 * //=> '5 hrs'
 *
 * @example
 * // Order follows the map's insertion order
 * const result = formatDurationCustom(
 *   { days: 51, hours: 10, minutes: 32 },
 *   { days: 'd', hours: 'h', minutes: 'm' }
 * )
 * //=> '51d 10h 32m'
 */
export function formatDurationCustom(
  duration: Duration,
  labels: DurationCustomLabels,
  options?: { zero?: boolean; delimiter?: string },
): string {
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";

  const units = Object.keys(labels) as DurationUnit[];
  const parts: string[] = [];

  for (const unit of units) {
    const value = duration[unit];
    if (value === undefined) continue;
    if (value === 0 && !zero) continue;
    parts.push(`${value}${labels[unit] ?? ""}`);
  }

  return parts.join(delimiter);
}