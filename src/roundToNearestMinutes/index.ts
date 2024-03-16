import { getRoundingMethod } from "../_lib/getRoundingMethod/index.js";
import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";
import type {
  NearestMinutes,
  NearestToUnitOptions,
  RoundingOptions,
} from "../types.js";

/**
 * The {@link roundToNearestMinutes} function options.
 */
export interface RoundToNearestMinutesOptions
  extends NearestToUnitOptions<NearestMinutes>,
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
 * // Round 10 July 2014 12:12:34 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * //=> Thu Jul 10 2014 12:15:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'floor' })
 * //=> Thu Jul 10 2014 12:12:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:12:34 to nearest half hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'ceil', nearestTo: 30 })
 * //=> Thu Jul 10 2014 12:30:00
 */
export function roundToNearestMinutes<DateType extends Date>(
  date: DateType | number | string,
  options?: RoundToNearestMinutesOptions,
): DateType {
  const nearestTo = options?.nearestTo ?? 1;

  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);

  const _date = toDate(date);
  const fractionalSeconds = _date.getSeconds() / 60;
  const fractionalMilliseconds = _date.getMilliseconds() / 1000 / 60;
  const minutes =
    _date.getMinutes() + fractionalSeconds + fractionalMilliseconds;

  // Unlike the `differenceIn*` functions, the default rounding behavior is `round` and not 'trunc'
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);

  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;

  const result = constructFrom(date, _date);
  result.setMinutes(roundedMinutes, 0, 0);
  return result;
}
