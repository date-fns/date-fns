import toDate from '../toDate/index'
import constructFrom from '../constructFrom/index'
import { Duration, DurationUnit } from '../types'
import {
  addSeconds,
  addYears,
  addMonths,
  addDays,
  addHours,
  addMinutes,
  addWeeks,
} from '../index'

const defaultFormat: DurationUnit[] = [
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
]

const addFnMapper = {
  years: addYears,
  months: addMonths,
  weeks: addWeeks,
  days: addDays,
  hours: addHours,
  minutes: addMinutes,
  seconds: addSeconds,
}

/**
 * @name addDuration
 * @category Date Helpers
 * @summary Add the specified duration.
 *
 * @description
 * Add the specified duration to the given date.
 *
 * @param date - the date to be changed
 * @param duration - the amount to be added in duration object. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns - the new date with the duration added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), { days: 10 })
 * //=> Thu Sep 11 2014 00:00:00
 */
export default function addDuration<DateType extends Date>(
  dirtyDate: DateType | number,
  duration: Duration
): DateType {
  const date = toDate(dirtyDate)
  if (!duration) return constructFrom(dirtyDate, NaN)

  const result = defaultFormat.reduce((acc, unit) => {
    let amount = duration[unit]
    if (amount !== undefined && isNaN(amount))
      return constructFrom(dirtyDate, NaN)
    if (amount !== undefined && amount) {
      const addFn = addFnMapper[unit]
      if (addFn) return toDate(addFn(acc, amount))

      // switch (unit) {
      //   case 'years':
      //     return toDate(addYears(acc, amount))
      //   case 'months':
      //     return toDate(addMonths(acc, amount))
      //   case 'weeks':
      //     return toDate(addWeeks(acc, amount))
      //   case 'days':
      //     return toDate(addDays(acc, amount))
      //   case 'hours':
      //     return toDate(addHours(acc, amount))
      //   case 'minutes':
      //     return toDate(addMinutes(acc, amount))
      //   case 'seconds':
      //     return toDate(addSeconds(acc, amount))
      //   default:
      //     return acc
      // }
    }
    return acc
  }, date)
  return result
}
