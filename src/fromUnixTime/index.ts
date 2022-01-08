/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - the given Unix timestamp (in seconds)
 * @returns the date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
export default function fromUnixTime(unixTime: number): Date {
  const unixTimeTransformed = Math.trunc(unixTime)

  return new Date(unixTimeTransformed * 1000)
}
