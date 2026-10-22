import { isValid } from "../isValid/index.js";
import { parseISO } from "../parseISO/index.js";

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ISO_TIME_RE =
  /^(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:Z|[+-]\d{2}(?::\d{2})?)?$/;
const ISO_COMPLETE_RE =
  /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}(?::\d{2})?)?)?$/;

function isInTimeRange(h: number, m: number, s: number): boolean {
  return h < 24 && m < 60 && s < 60;
}

/**
 * @name isISOMatch
 * @category Common Helpers
 * @summary Is the given string a valid ISO 8601 date string?
 *
 * @description
 * Returns `true` when `value` is a string that matches an ISO 8601 date format
 * (the same shapes produced by {@link formatISO}) AND denotes a real date/time
 * (e.g. `2020-02-30` returns `false`). Use `{ representation }` to restrict the
 * accepted shape: `'date'` (YYYY-MM-DD), `'time'` (HH:mm:ss, with optional
 * fractional seconds and timezone, range-checked), or the default `'complete'`
 * (date with optional `T`-separated, timezone-qualified time). See issue #2666.
 *
 * @param value - The value to check.
 * @param options - Optional `{ representation }`.
 * @returns True if `value` is a valid ISO 8601 date string.
 *
 * @example
 * isISOMatch('2014-11-03T19:39:39.844Z') // true
 * @example
 * isISOMatch('2014-02-11', { representation: 'date' }) // true
 * @example
 * isISOMatch('2020-02-30', { representation: 'date' }) // false (no such date)
 */
export function isISOMatch(
  value: unknown,
  options: { representation?: "complete" | "date" | "time" } = {},
): boolean {
  if (typeof value !== "string" || value === "") {
    return false;
  }

  const representation = options.representation ?? "complete";

  if (representation === "time") {
    const match = value.match(ISO_TIME_RE);
    if (!match) {
      return false;
    }
    const [, h, m, s] = match;
    return isInTimeRange(Number(h), Number(m), Number(s));
  }

  const regex = representation === "date" ? ISO_DATE_RE : ISO_COMPLETE_RE;
  if (!regex.test(value)) {
    return false;
  }

  let parsed: Date;
  try {
    parsed = parseISO(value);
  } catch {
    return false;
  }
  return isValid(parsed);
}
