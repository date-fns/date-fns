import type { Locale } from './locale/types'

export interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export interface Interval {
  start: Date | number
  end: Date | number
}

export interface StepOptions {
  step?: number
}

export interface WeekStartOptions {
  weekStartsOn?: Day
}

export interface FirstWeekContainsDateOptions {
  firstWeekContainsDate?: FirstWeekContainsDate
}

export interface LocaleOptions {
  locale?: Locale
}

export interface FormatOptions {
  format?: 'extended' | 'basic'
}

export interface RepresentationOptions {
  representation?: 'complete' | 'date' | 'time'
}

export interface AdditionalDigitsOptions {
  additionalDigits?: 0 | 1 | 2
}

export type Era = 0 | 1

export type Quarter = 1 | 2 | 3 | 4

export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

/**
 * FirstWeekContainsDate is used to determine which week is the first week of the year, based on what day the January, 1 is in that week.
 *
 * The day in that week can only be 1 (Monday) or 4 (Thursday).
 *
 * Please see https://en.wikipedia.org/wiki/Week#Week_numbering for more information.
 */
export type FirstWeekContainsDate = 1 | 4

export interface DateValues {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export type RoundingMethod = 'ceil' | 'floor' | 'round' | 'trunc'

export interface RoundingOptions {
  roundingMethod?: RoundingMethod
}

export type Unit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'dayOfYear'
  | 'date'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'

export interface FormatRFC3339Options {
  fractionDigits?: 0 | 1 | 2 | 3
}

export interface AdditionalTokensOptions {
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export interface FormatDistanceOptions {
  includeSeconds?: boolean
  addSuffix?: boolean
}

export interface FormatDistanceStrictOptions {
  addSuffix?: boolean
  unit?: Unit
  roundingMethod?: 'floor' | 'ceil' | 'round'
}

export interface FormatDurationOptions {
  format?: (keyof Duration)[]
  zero?: boolean
  delimiter?: string
}

export interface RoundToNearestMinutesOptions {
  nearestTo?: number
}

export interface AreIntervalsOverlappingOptions {
  inclusive?: boolean
}

export type IntlOptionsUnit =
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
