import type { FormatDistanceToken } from '../locale/types'
import type { Duration, DurationUnit, LocaleOptions } from '../types'
import defaultLocale from '../_lib/defaultLocale/index'
import { getDefaultOptions } from '../_lib/defaultOptions/index'

/**
 * The {@link formatDuration} function options.
 */
export interface FormatDurationOptions extends LocaleOptions {
  format?: DurationUnit[]
  zero?: boolean
  delimiter?: string
}

const defaultFormat: DurationUnit[] = [
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
]

/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param duration - the duration to format
 * @param options - an object with options.
 * @returns the formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */
export default function formatDuration(
  duration: Duration,
  options?: FormatDurationOptions
): string {
  const defaultOptions = getDefaultOptions()
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale
  const format = options?.format ?? defaultFormat
  const zero = options?.zero ?? false
  const delimiter = options?.delimiter ?? ' '

  if (!locale.formatDistance) {
    return ''
  }

  const result = format
    .reduce((acc, unit) => {
      const token = `x${unit.replace(/(^.)/, (m) =>
        m.toUpperCase()
      )}` as FormatDistanceToken
      const value = duration[unit]
      if (value !== undefined && (zero || duration[unit])) {
        return acc.concat(locale.formatDistance(token, value))
      }
      return acc
    }, [] as string[])
    .join(delimiter)

  return result
}
