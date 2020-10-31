export interface Locale {
  code: string
  formatDistance: FormatDistanceFn
  formatRelative: FormatRelativeFn
  localize: Localize
  formatLong: FormatLong
  match: Match
  options?: LocaleOptions
}

export interface LocaleOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

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
  options?: { weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 }
) => string

export type LocalizeFn<TValue> = (
  value: TValue,
  options?: {
    width?: 'narrow' | 'short' | 'abbreviated' | 'wide'
    context?: 'formatting' | 'standalone'
  }
) => string

export interface Localize {
  ordinalNumber: LocalizeFn<number>
  era: LocalizeFn<0 | 1>
  quarter: LocalizeFn<1 | 2 | 3 | 4>
  month: LocalizeFn<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>
  day: LocalizeFn<0 | 1 | 2 | 3 | 4 | 5 | 6>
  dayPeriod: LocalizeFn<
    | 'am'
    | 'pm'
    | 'midnight'
    | 'noon'
    | 'morning'
    | 'afternoon'
    | 'evening'
    | 'night'
  >
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
  era: MatchFn<0 | 1>
  quarter: MatchFn<1 | 2 | 3 | 4>
  month: MatchFn<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>
  day: MatchFn<0 | 1 | 2 | 3 | 4 | 5 | 6>
  dayPeriod: MatchFn<
    | 'am'
    | 'pm'
    | 'midnight'
    | 'noon'
    | 'morning'
    | 'afternoon'
    | 'evening'
    | 'night'
  >
}
