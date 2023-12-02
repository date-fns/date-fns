import toDate from '../toDate/index'
import constructFrom from '../constructFrom/index'

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
export default function addDays<DateType extends Date>(
  date: DateType | number | string,
  amount: number
): DateType {
  const _date = toDate(date)
  if (isNaN(amount)) return constructFrom(date, NaN)
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date
  }
  const millisecondsInADay = 24 * 60 * 60 * 1000
  // number of milliseconds in the amount of days
  const daysInMilliseconds = amount * millisecondsInADay

  const totalMilliseconds = _date.getTime() + daysInMilliseconds
  _date.setTime(totalMilliseconds)

  return _date
}
