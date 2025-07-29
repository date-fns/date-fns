import { startOfDay } from "../startOfDay/index.js";
import type { ContextOptions } from "../types.js";

/**
 * The {@link startOfToday} function options.
 */
export interface StartOfTodayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 *
 * @example
 * // If today is 18 August 2024 in Asia/Tokyo:
 * import { tz } from '@date-fns/tz'
 * const result = startOfToday({ in: tz('Asia/Tokyo') })
 * //=> Sun Aug 18 2024 00:00:00 GMT+0900 (Japan Standard Time)
 */
export function startOfToday<ContextDate extends Date>(
  options?: StartOfTodayOptions<ContextDate> | undefined,
): ContextDate {
  return startOfDay(Date.now(), options);
}
