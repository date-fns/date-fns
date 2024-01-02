import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";
import type { NearestMinutesOptions, RoundingOptions } from "../types.js";
import { getRoundingMethod } from "../_lib/roundingMethods/index.js";

/**
 * The {@link roundToNearestMinutes} function options.
 */
export interface RoundToNearestMinutesOptions
  extends NearestMinutesOptions,
    RoundingOptions {}

/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest minute
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */
export function roundToNearestMinutes<DateType extends Date>(
  date: DateType | number | string,
  options?: RoundToNearestMinutesOptions,
): DateType {
  const nearestTo = options?.nearestTo ?? 1;

  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);

  const _date = toDate(date);
  const seconds = _date.getSeconds(); // relevant if nearestTo is 1, which is the default case
  const minutes = _date.getMinutes() + seconds / 60;
  const roundingMethod = getRoundingMethod(options?.roundingMethod);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  const remainderMinutes = minutes % nearestTo;
  const addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;

  const result = constructFrom(_date, _date);
  result.setMinutes(roundedMinutes + addedMinutes, 0, 0);
  return result;
}
