import constructFrom from '../constructFrom/index'
import toDate from '../toDate/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * The {@link roundToNearestMinutes} function options.
 */
export interface RoundToNearestMinutesOptions extends RoundingOptions {
  nearestTo?: number
}

/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @param date - the date to round
 * @param options - an object with options.
 * @returns the new date rounded to the closest minute
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */
export default function roundToNearestMinutes<DateType extends Date>(
  dirtyDate: DateType | number,
  options?: RoundToNearestMinutesOptions
): DateType {
  const nearestTo = options?.nearestTo ?? 1

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30')
  }

  const date = toDate(dirtyDate)
  const milliseconds = date.getMilliseconds()
  const seconds = date.getSeconds() + milliseconds / 1000
  const minutes = date.getMinutes() + seconds / 60
  const roundingMethod = getRoundingMethod(options?.roundingMethod || 'round')
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo

  const result = constructFrom(date, date)
  result.setMinutes(roundedMinutes, 0, 0)
  return result
}
