import { startOfWeek } from "../startOfWeek/index.js";
import { endOfWeek } from "../endOfWeek/index.js";
import { isWeekend } from "../isWeekend/index.js";
import { toDate } from "../toDate/index.js";
import { Locale } from "../types.js";

/**
 * @name isSameBusinessWeek
 * @category Week Helpers
 * @summary Are the given dates in the same business week?
 *
 * @description
 * Checks if the given dates are in the same business week.
 * A business week is considered Monday to Friday by default.
 * Week boundaries can be configured using `weekStartsOn`.
 *
 * Weekend days (Saturday and Sunday) are normalized to the nearest
 * business day within the same week before comparison.
 *
 * @typeParam DateType - The `Date` type, the function operates on.
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns `true` if the dates are in the same business week
 *
 * @example
 * // Are Friday and Monday in the same business week?
 * isSameBusinessWeek(
 *   new Date(2025, 4, 9),
 *   new Date(2025, 4, 12),
 *   { weekStartsOn: 1 }
 * )
 * //=> true
 */
export function isSameBusinessWeek<DateType extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: Locale;
  },
): boolean {
  const leftDate = toDate(dateLeft);
  const rightDate = toDate(dateRight);

  if (isNaN(leftDate.getTime()) || isNaN(rightDate.getTime())) {
    return false;
  }

  const normalizeToBusinessDay = (date: Date): Date => {
    const normalized = new Date(date.getTime());

    if (isWeekend(normalized)) {
      const day = normalized.getDay();
      // Saturday → Friday
      if (day === 6) normalized.setDate(normalized.getDate() - 1);
      // Sunday → Monday
      if (day === 0) normalized.setDate(normalized.getDate() + 1);
    }

    return normalized;
  };

  const normalizedLeft = normalizeToBusinessDay(leftDate);
  const normalizedRight = normalizeToBusinessDay(rightDate);

  const startLeft = startOfWeek(normalizedLeft, options);
  const endLeft = endOfWeek(normalizedLeft, options);

  return (
    normalizedRight.getTime() >= startLeft.getTime() &&
    normalizedRight.getTime() <= endLeft.getTime()
  );
}
