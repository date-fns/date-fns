import { toDate } from '../toDate/index.js'
import { Interval } from '../types.js'

/**
 * The {@link interval} function options.
 */
export interface IntervalOptions {
  /** Asserts that the interval is positive (start is after the end). */
  assertPositive?: boolean
}

/**
 * Creates an interval object and validates its values.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @returns The interval object.
 */
export function interval<DateType extends Date>(
  start: DateType | number | string,
  end: DateType | number | string,
  options?: IntervalOptions
): Interval {
  if (!start) throw new TypeError('Start date is required')
  if (!end) throw new TypeError('End date is required')

  const _start = toDate(start)
  if (isNaN(+_start)) throw new TypeError('Start date is invalid')

  const _end = toDate(end)
  if (isNaN(+_end)) throw new TypeError('End date is invalid')

  if (options?.assertPositive && +_start > +_end)
    throw new TypeError('End date must be after start date')

  return { start: _start, end: _end }
}
