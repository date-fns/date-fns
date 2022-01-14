/* eslint-disable no-unused-vars */

import type {
  Day,
  Era,
  FirstWeekContainsDate,
  Month,
  Quarter,
  Unit,
} from '../types'
import type {
  BuildLocalizeFnArgCallback,
  LocalizeUnitValues,
  LocalizeUnitValuesIndex,
} from './_lib/buildLocalizeFn'

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

export interface FormatDistanceFnOptions {
  addSuffix?: boolean
  comparison?: -1 | 0 | 1
}

export type FormatDistanceTokenFn = (
  count: number,
  options?: FormatDistanceOptions
) => string

export interface FormatDistanceOptions {
  addSuffix?: boolean
  comparison?: -1 | 0 | 1
}

export type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: FormatDistanceOptions
) => string

export type FormatRelativeTokenFn = (
  date: Date | number,
  baseDate: Date | number,
  options?: { weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 }
) => string

export type FormatRelativeToken =
  | 'lastWeek'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'nextWeek'
  | 'other'

export interface FormatRelativeFnOptions {
  weekStartsOn?: Day
  locale?: Locale
}

export type FormatRelativeFn = (
  token: FormatRelativeToken,
  date: Date,
  baseDate: Date,
  options?: FormatRelativeFnOptions
) => string

// TODO: You're real champion if you're actually get back to it. Proud of you!
// Try to get rid of this and (especially) ArgCallback types because the only
// case when it's helpful is when using quarter. Maybe.
export type LocalizeUnitIndex<
  Unit extends LocaleUnit | number
> = Unit extends LocaleUnit
  ? LocalizeUnitValuesIndex<LocalizeUnitValues<Unit>>
  : number

export type LocalizeFn<
  Result extends LocaleUnit | number,
  ArgCallback extends BuildLocalizeFnArgCallback<Result> | undefined = undefined
> = (
  value: ArgCallback extends undefined
    ? Result
    : Result extends Quarter
    ? Quarter
    : LocalizeUnitIndex<Result>,
  options?: {
    width?: LocalePatternWidth
    context?: 'formatting' | 'standalone'
    unit?: Unit
  }
) => string

export interface Localize {
  ordinalNumber: LocalizeFn<
    number,
    BuildLocalizeFnArgCallback<number> | undefined
  >
  era: LocalizeFn<Era, undefined>
  quarter: LocalizeFn<Quarter, BuildLocalizeFnArgCallback<Quarter>>
  month: LocalizeFn<Month, undefined>
  day: LocalizeFn<Day, undefined>
  dayPeriod: LocalizeFn<LocaleDayPeriod, undefined>
}

export interface BuildMatchFnArgs<
  Result extends LocaleUnit,
  DefaultMatchWidth extends LocalePatternWidth,
  DefaultParseWidth extends LocalePatternWidth
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
  Result extends LocaleUnit,
  DefaultWidth extends LocalePatternWidth
> = {
  [pattern in LocalePatternWidth]?: ParsePattern<Result>
} &
  { [key in DefaultWidth]: ParsePattern<Result> }

export type ParsePattern<
  Result extends LocaleUnit
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
  Result extends LocaleUnit,
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

export type LocaleOrdinalUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'
  | 'date'
  | 'dayOfYear'

export type LocalePatternWidth =
  | 'narrow'
  | 'short'
  | 'abbreviated'
  | 'wide'
  | 'any'

export type LocaleDayPeriod =
  | 'am'
  | 'pm'
  | 'midnight'
  | 'noon'
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'night'

export type LocaleOptionUnit =
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'date'
  | 'dayOfYear'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

export type FormatLongWidth = 'full' | 'long' | 'medium' | 'short' | 'any'

export type DateTimeFormat = { [format in FormatLongWidth]: string }

export type LocaleUnit = Era | Quarter | Month | Day | LocaleDayPeriod

export interface FormatLong {
  date: FormatLongFn
  time: FormatLongFn
  dateTime: FormatLongFn
}

export interface FormatLongFnOptions {
  width?: FormatLongWidth
}

export type FormatLongFn = (options: FormatLongFnOptions) => string
