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

/**
 * The duration object.
 */
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

/**
 * An object that combines two dates to represent the time interval.
 */
export interface Interval<DateType extends Date = Date> {
  /** The start of the interval. */
  start: DateType | number
  /** The end of the interval. */
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

/**
 * The day of the week type alias (`0 | 1 | 2 | 3 | 4 | 5 | 6`). Unlike the date
 * (the number of days since the beginning of the month), which begins with 1
 * and is dynamic (can go up to 28, 30, or 31), the day starts with 0 and static
 * (always ends at 6). Look at it as an index in an array where Sunday is
 * the first element and Saturday is the last.
 */
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
