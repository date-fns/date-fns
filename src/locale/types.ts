import { Era, Quarter, Month, Day, DayPeriod, WeekStartOptions, FirstWeekContainsDateOptions } from '@/types'

export interface Locale {
  code: string
  formatDistance: FormatDistanceFn
  formatRelative: FormatRelativeFn
  localize: Localize
  formatLong: FormatLong
  match: Match
  options?: LocaleOptions
}

export interface LocaleOptions extends WeekStartOptions, FirstWeekContainsDateOptions { }

export type FormatDistanceFn = (
  token:
    | 'lessThanXSeconds'
    | 'xSeconds'
    | 'halfAMinute'
    | 'lessThanXMinutes'
    | 'xMinutes'
    | 'aboutXHours'
    | 'xHours'
    | 'xDays'
    | 'aboutXMonths'
    | 'xMonths'
    | 'aboutXYears'
    | 'xYears'
    | 'overXYears'
    | 'almostXYears',
  count: number,
  options?: {
    addSuffix?: boolean
    comparison?: -1 | 0 | 1
  }
) => string

export type FormatRelativeFn = (
  token: 'lastWeek' | 'yesterday' | 'today' | 'tomorrow' | 'nextWeek' | 'other',
  date: Date | number,
  baseDate: Date | number,
  options?: WeekStartOptions
) => string

export type LocalizeFn<TValue> = (
  value: TValue,
  options?: {
    width?: 'narrow' | 'short' | 'abbreviated' | 'wide'
    context?: 'formatting' | 'standalone'
    unit?: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date' | 'dayOfYear'
  }
) => string

export interface Localize {
  ordinalNumber: LocalizeFn<number>
  era: LocalizeFn<Era>
  quarter: LocalizeFn<Quarter>
  month: LocalizeFn<Month>
  day: LocalizeFn<Day>
  dayPeriod: LocalizeFn<DayPeriod>
}

export type FormatLongFn = (options?: {
  width?: 'full' | 'long' | 'medium' | 'short'
}) => string

export interface FormatLong {
  date: FormatLongFn
  time: FormatLongFn
  dateTime: FormatLongFn
}

export type MatchFn<TResult> = (
  str: string,
  options?: {
    width?: 'narrow' | 'short' | 'abbreviated' | 'wide'
  }
) => TResult

export interface Match {
  ordinalNumber: MatchFn<number>
  era: MatchFn<Era>
  quarter: MatchFn<Quarter>
  month: MatchFn<Month>
  day: MatchFn<Day>
  dayPeriod: MatchFn<DayPeriod>
}
