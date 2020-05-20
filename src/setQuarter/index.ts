import toInteger from '../_lib/toInteger/index.js'
import toDate from '../toDate/index.js'
import setMonth from '../setMonth/index.js'

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
export default function setQuarter(
  dirtyDate: Date | number,
  dirtyQuarter: number
) {
  const date = toDate(dirtyDate)
  const quarter = toInteger(dirtyQuarter)
  const oldQuarter = Math.floor(date.getMonth() / 3) + 1
  const diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}
