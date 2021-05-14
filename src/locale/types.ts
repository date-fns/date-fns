import { Era, FirstWeekContainsDate, Month, Quarter } from '../types'

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
  weekStartsOn?: Day
  firstWeekContainsDate?: FirstWeekContainsDate
}

export type FormatDistanceToken =
  | 'lessThanXSeconds'
  | 'xSeconds'
  | 'halfAMinute'
  | 'lessThanXMinutes'
  | 'xMinutes'
  | 'aboutXHours'
  | 'xHours'
  | 'xDays'
  | 'aboutXWeeks'
  | 'xWeeks'
  | 'aboutXMonths'
  | 'xMonths'
  | 'aboutXYears'
  | 'xYears'
  | 'overXYears'
  | 'almostXYears'

export type FormatDistanceLocale<Value> = {
  [token in FormatDistanceToken]: Value
}

export type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: {
    addSuffix?: boolean
    comparison?: -1 | 0 | 1
  }
) => string

export type FormatRelativeToken =
  | 'lastWeek'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'nextWeek'
  | 'other'

export type FormatRelativeFn = (
  token: FormatRelativeToken,
  date: Date | number,
  baseDate: Date | number,
  options?: { weekStartsOn?: Day }
) => string

export type LocalizeFn<TValue> = (
  value: TValue,
  options?: {
    width?: LocalePatternWidth
    context?: 'formatting' | 'standalone'
  }
) => string

export interface Localize {
  ordinalNumber: LocalizeFn<number>
  era: LocalizeFn<Era>
  quarter: LocalizeFn<Quarter>
  month: LocalizeFn<Month>
  day: LocalizeFn<Day>
  dayPeriod: LocalizeFn<LocaleDayPeriod>
}

export interface BuildMatchFnArgs<
  Result extends LocaleMatchResult,
  DefaultMatchWidth extends LocalePatternWidth,
  DefaultParseWidth extends LocaleParsePatternWidth
> {
  matchPatterns: MatchPatterns<DefaultMatchWidth>
  defaultMatchWidth: DefaultMatchWidth
  parsePatterns: ParsePatterns<Result, DefaultParseWidth>
  defaultParseWidth: DefaultParseWidth
  valueCallback?: MatchValueCallback<
    Result extends LocaleDayPeriod ? string : number,
    Result
  >
}

export type MatchPatterns<DefaultWidth extends LocalePatternWidth> = {
  [pattern in LocalePatternWidth]?: RegExp
} &
  { [key in DefaultWidth]: RegExp }

export type ParsePatterns<
  Result extends LocaleMatchResult,
  DefaultWidth extends LocaleParsePatternWidth
> = {
  [pattern in LocaleParsePatternWidth]?: ParsePattern<Result>
} &
  { [key in DefaultWidth]: ParsePattern<Result> }

export type ParsePattern<
  Result extends LocaleMatchResult
> = Result extends LocaleDayPeriod
  ? Record<LocaleDayPeriod, RegExp>
  : Result extends Quarter
  ? readonly [RegExp, RegExp, RegExp, RegExp]
  : Result extends Era
  ? readonly [RegExp, RegExp]
  : Result extends Day
  ? readonly [RegExp, RegExp, RegExp, RegExp, RegExp, RegExp, RegExp]
  : Result extends Month
  ? readonly [
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp,
      RegExp
    ]
  : never

export type BuildMatchFn<
  Result extends LocaleMatchResult,
  DefaultMatchWidth extends LocalePatternWidth,
  DefaultParseWidth extends LocalePatternWidth
> = (
  args: BuildMatchFnArgs<Result, DefaultMatchWidth, DefaultParseWidth>
) => MatchFn<Result>

export type MatchFn<Result> = (
  str: string,
  options?: {
    width?: LocalePatternWidth
    valueCallback?: MatchValueCallback<string | Result, Result>
  }
) => { value: Result; rest: string } | null

export type MatchValueCallback<Arg, Result> = (value: Arg) => Result

export interface Match {
  ordinalNumber: MatchFn<number>
  era: MatchFn<Era>
  quarter: MatchFn<Quarter>
  month: MatchFn<Month>
  day: MatchFn<Day>
  dayPeriod: MatchFn<LocaleDayPeriod>
}

export type LocalePatternWidth = 'narrow' | 'short' | 'abbreviated' | 'wide'

export type LocaleParsePatternWidth = LocalePatternWidth | 'any'

export type LocaleDayPeriod =
  | 'am'
  | 'pm'
  | 'midnight'
  | 'noon'
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'night'

export type FormatLongWidth = 'full' | 'long' | 'medium' | 'short'

export type LocaleMatchResult = Era | Quarter | Month | Day | LocaleDayPeriod

export interface FormatLong {
  date: FormatLongFn
  time: FormatLongFn
  dateTime: FormatLongFn
}

export interface FormatLongFnOptions {
  width?: FormatLongWidth
}

export type FormatLongFn = (options: FormatLongFnOptions) => string
