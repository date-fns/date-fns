import constructFrom from '../constructFrom/index'
import isSaturday from '../isSaturday/index'
import isSunday from '../isSunday/index'
import isWeekend from '../isWeekend/index'
import toDate from '../toDate/index'

/**
 * @name addBusinessDays
 * @category Date Extension Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param date - the date to be changed
 * @param amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
export default function addBusinessDays<DateType extends Date>(
  dirtyDate: DateType | number,
  amount: number
): DateType {
  const date = toDate(dirtyDate)
  const startedOnWeekend = isWeekend(date)

  if (isNaN(amount)) return constructFrom(dirtyDate, NaN)

  const hours = date.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = Math.trunc(amount / 5)

  date.setDate(date.getDate() + fullWeeks * 7)

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5)

  // Loops over remaining days
  while (restDays > 0) {
    date.setDate(date.getDate() + sign)
    if (!isWeekend(date)) restDays -= 1
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && isWeekend(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (isSaturday(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1))
    if (isSunday(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2))
  }

  // Restore hours to avoid DST lag
  date.setHours(hours)

  return date
}
