import { format } from "../format/index.ts";

/**
 * @name formatDatetimeLocal
 * @category Common Helpers
 * @summary Format a date as an HTML5 datetime-local string
 *
 * @description
 * Format a date into the value format expected by the HTML5
 * `<input type="datetime-local">` element (see
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#value).
 *
 * By default the format is `YYYY-MM-DDTHH:mm` (e.g. `"2017-06-01T08:30"`).
 * Pass `{ includeSeconds: true }` to append seconds (`...:ss`), and
 * `{ includeMs: true }` to append milliseconds (`...:ss.SSS`). includeMs
 * implies includeSeconds. The result contains no timezone offset — the date
 * is rendered in its local components as-is.
 *
 * @param date - The date to format
 * @param options - An object with `includeSeconds` and `includeMs` booleans
 *
 * @returns The datetime-local formatted string
 *
 * @example
 * const result = formatDatetimeLocal(new Date(2017, 5, 1, 8, 30, 0))
 * //=> '2017-06-01T08:30'
 *
 * @example
 * const result = formatDatetimeLocal(new Date(2017, 5, 1, 8, 30, 45), {
 *   includeSeconds: true
 * })
 * //=> '2017-06-01T08:30:45'
 *
 * @example
 * const result = formatDatetimeLocal(new Date(2017, 5, 1, 8, 30, 45, 123), {
 *   includeMs: true
 * })
 * //=> '2017-06-01T08:30:45.123'
 */
export function formatDatetimeLocal(
  date: Date,
  options?: { includeSeconds?: boolean; includeMs?: boolean },
): string {
  const pattern = options?.includeMs
    ? "yyyy-MM-dd'T'HH:mm:ss.SSS"
    : options?.includeSeconds
      ? "yyyy-MM-dd'T'HH:mm:ss"
      : "yyyy-MM-dd'T'HH:mm";
  return format(date, pattern);
}