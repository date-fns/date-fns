import toDate from '../toDate/index.js'
import toInteger from '../_lib/toInteger/index.js'

/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param unixTime - The given Unix timestamp
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
export default function fromUnixTime(dirtyUnixTime) {
  var unixTime = toInteger(dirtyUnixTime)

  return toDate(unixTime * 1000)
}
