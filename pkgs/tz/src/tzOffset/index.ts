const offsetFormatCache: Record<string, Intl.DateTimeFormat["format"]> = {};

const offsetCache: Record<string, number> = {};

/**
 * The function returns UTC offset in minutes for the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns `480`, while `getTimezoneOffset` returns `-480`.
 *
 * It uses `Intl.DateTimeFormat` internally to access otherwise unavailable
 * runtime's time zone data, and falls back to basic manual parsing if Intl API
 * is not supported (e.g., older Node.js versions, React Native's Hermes, etc.).
 *
 * @param timeZone - Time zone name (IANA or UTC offset).
 * @param date - Date to check the offset for.
 *
 * @returns UTC offset in minutes (e.g., `480` for date in UTC+8).
 */
export function tzOffset(timeZone: string | undefined, date: Date): number {
  try {
    // Create `Intl.DateTimeFormat` with `"longOffset"` that gives us consistent
    // date strings like `"5/19/2026, GMT-08:00"`.
    const format = (offsetFormatCache[timeZone!] ||= new Intl.DateTimeFormat(
      "en-US",
      { timeZone, timeZoneName: "longOffset" },
    ).format);

    // Get `"-08:00"`.
    const offsetStr = format(date).split("GMT")[1]!;

    // Avoid parsing the same offset string.
    if (offsetStr in offsetCache) return offsetCache[offsetStr]!;

    // Calculate offset from `["-08", "00"]` and cache it.
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch {
    // Fallback to manual parsing if the runtime doesn't support
    // `±HH:MM/±HHMM/±HH`. See: https://github.com/nodejs/node/issues/53419.
    if (timeZone! in offsetCache) return offsetCache[timeZone!]!;
    const captures = timeZone?.match(offsetRe);
    if (captures) return calcOffset(timeZone!, captures.slice(1));

    return NaN;
  }
}

const offsetRe = /([+-]\d\d):?(\d\d)?/;

function calcOffset(cacheStr: string, values: string[]): number {
  const hours = +(values[0] || 0);
  const minutes = +(values[1] || 0);
  // Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
  const seconds = +(values[2] || 0) / 60;
  return (offsetCache[cacheStr] =
    hours * 60 + minutes > 0
      ? hours * 60 + minutes + seconds
      : hours * 60 - minutes - seconds);
}
