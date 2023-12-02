import toDate from '../toDate/index.js'
import type { Interval as IntervalInterface } from '../types.js'

/**
 * The {@link Interval} constructor options.
 */
export interface IntervalOptions {
  /** Asserts that the interval is positive (start is after the end). */
  assertPositive?: boolean
}

/**
 * An object that combines two dates to represent the time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 */
export default class Interval<DateType extends Date = Date>
  implements IntervalInterface<DateType>
{
  /** The start of the interval. */
  start: DateType
  /** The end of the interval. */
  end: DateType

  /**
   * Creates an interval object.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param start - The start of the interval.
   * @param end - The end of the interval.
   * @param options - The options object.
   */
  constructor(
    start: DateType | number | string,
    end: DateType | number | string,
    options?: IntervalOptions
  ) {
    if (!start) throw new TypeError('Start date is required')
    if (!end) throw new TypeError('End date is required')

    this.start = toDate(start)
    if (isNaN(+this.start)) throw new TypeError('Start date is invalid')

    this.end = toDate(end)
    if (isNaN(+this.end)) throw new TypeError('End date is invalid')

    if (options?.assertPositive && +this.start > +this.end)
      throw new TypeError('End date must be after start date')
  }
}
