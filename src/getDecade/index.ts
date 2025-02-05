import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getDecade} function options.
 */
export interface GetDecadeOptions extends ContextOptions<Date> {}

/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */
export function getDecade(
  date: DateArg<Date> & {},
  options?: GetDecadeOptions | undefined,
): number {
  // TODO: Switch to more technical definition in of decades that start with 1
  // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
  // change, so it can only be done in 4.0.
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const decade = Math.floor(year / 10) * 10;
  return decade;
}
