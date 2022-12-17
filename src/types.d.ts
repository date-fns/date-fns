import type { Locale } from './locale/types'

export interface GenericDateConstructor<DateType> {
  new (): DateType

  new (value: Date | number | string): DateType

  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): DateType
}

export interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export type DurationUnit = keyof Duration

export interface Interval<DateType extends Date = Date> {
  start: DateType | number
  end: DateType | number
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

export type FormatDistanceStrictUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'year'

export interface AdditionalTokensOptions {
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
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
