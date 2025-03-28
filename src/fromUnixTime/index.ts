import { toDate } from "../toDate/index.js";
import type { ContextOptions } from "../types.js";

/**
 * The {@link fromUnixTime} function options.
 */
export interface FromUnixTimeOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - The given Unix timestamp (in seconds)
 * @param options - An object with options. Allows to pass a context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
export function fromUnixTime<DateType extends Date = Date>(
  unixTime: number,
  options?: FromUnixTimeOptions<DateType> | undefined,
): DateType {
  return toDate(unixTime * 1000, options?.in);
}
