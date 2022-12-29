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

/**
 * The locale object.
 */
export interface Locale {
  /** The locale code (ISO 639-1 + optional country code). */
  code: string
  /** The function to format distance. */
  formatDistance: FormatDistanceFn
  /** The function to relative time. */
  formatRelative: FormatRelativeFn
  /** The object with functions used to localize various values. */
  localize: Localize
  /** The object with functions that return localized formats. */
  formatLong: FormatLong
  /** The object with functions used to match and parse various localized values. */
  match: Match
  /** An object with locale options. */
  options?: LocaleOptions
}

/**
 * The locale options.
 */
export interface LocaleOptions {
  /** The index of the first day of the week (0 - Sunday). */
  weekStartsOn?: Day
  /** The day of January, which is always in the first week of the year. */
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
  options?: FormatDistanceFnOptions
) => string

export interface FormatDistanceFnOptions {
  addSuffix?: boolean
  comparison?: -1 | 0 | 1
}

/**
 * The function that takes a token passed by `formatDistance` or
 * `formatDistanceStrict` and payload, and returns localized distance in words.
 */
export type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: FormatDistanceFnOptions
) => string

export type FormatRelativeTokenFn = <DateType extends Date>(
  date: DateType | number,
  baseDate: DateType | number,
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

/**
 * The function that takes a token passed by `formatRelative` and two dates and
 * returns the localized relative date format.
 */
export type FormatRelativeFn = <DateType extends Date>(
  token: FormatRelativeToken,
  date: DateType,
  baseDate: DateType,
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

/**
 * The object with functions used to localize various values.
 */
export interface Localize {
  /** The function that localizes an ordinal number. */
  ordinalNumber: LocalizeFn<
    number,
    BuildLocalizeFnArgCallback<number> | undefined
  >
  /** The function that takes 0 or 1 and returns localized era */
  era: LocalizeFn<Era, undefined>
  /** The function that localizes a quarter. */
  quarter: LocalizeFn<Quarter, BuildLocalizeFnArgCallback<Quarter>>
  /** The function that localizes a month. */
  month: LocalizeFn<Month, undefined>
  /** The function that localizes a day of the week. */
  day: LocalizeFn<Day, undefined>
  /**
   * The function that takes one of the strings 'am', 'pm', 'midnight', 'noon',
   * 'morning', 'afternoon', 'evening' or 'night' and returns localized time
   * of the day.
   */
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

export type MatchFn<Result, ExtraOptions = Record<string, unknown>> = (
  str: string,
  options?: {
    width?: LocalePatternWidth
    /**
     * @deprecated Map the value manually instead.
     * @example
     * const matchResult = locale.match.ordinalNumber('1st')
     * if (matchResult) {
     *   matchResult.value = valueCallback(matchResult.value)
     * }
     */
    valueCallback?: MatchValueCallback<string, Result>
  } & ExtraOptions
) => { value: Result; rest: string } | null

export type MatchValueCallback<Arg, Result> = (value: Arg) => Result

/**
 * The object with functions used to match and parse various localized values.
 */
export interface Match {
  /** The function that parses a localized ordinal number. */
  ordinalNumber: MatchFn<number, { unit: LocaleOrdinalUnit }>
  /** The function that parses a localized era. */
  era: MatchFn<Era>
  /** The function that parses a localized quarter. */
  quarter: MatchFn<Quarter>
  /** The function that parses a localized month. */
  month: MatchFn<Month>
  /** The function that parses a localized day of the week. */
  day: MatchFn<Day>
  /** The function that parses a localized time of the day. */
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

/**
 * The object with functions that return localized formats.
 */
export interface FormatLong {
  /** The function that returns a localized long date format. */
  date: FormatLongFn
  /** The function that returns a localized long time format. */
  time: FormatLongFn
  /** The function that returns a localized format of date and time combined. */
  dateTime: FormatLongFn
}

export interface FormatLongFnOptions {
  width?: FormatLongWidth
}

export type FormatLongFn = (options: FormatLongFnOptions) => string
