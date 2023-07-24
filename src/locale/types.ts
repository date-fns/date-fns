/* eslint-disable no-unused-vars */

import type {
  Day,
  Era,
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  Month,
  Quarter,
  WeekOptions,
} from '../types'

/**
 * The locale object with all functions and data needed to parse and format
 * dates. This is what each locale implements and exports.
 */
export interface Locale {
  /** The locale code (ISO 639-1 + optional country code) */
  code: string
  /** The function to format distance */
  formatDistance: FormatDistanceFn
  /** The function to relative time */
  formatRelative: FormatRelativeFn
  /** The object with functions used to localize various values */
  localize: Localize
  /** The object with functions that return localized formats */
  formatLong: FormatLong
  /** The object with functions used to match and parse various localized values */
  match: Match
  /** An object with locale options */
  options?: LocaleOptions
}

/**
 * The locale options.
 */
export interface LocaleOptions
  extends WeekOptions,
    FirstWeekContainsDateOptions {}

/// Format distance types

/**
 * The function that takes a token (i.e. halfAMinute) passed by `formatDistance`
 * or `formatDistanceStrict` and payload, and returns localized distance.
 *
 * @param token - The token to localize
 * @param count - The distance number
 * @param options - The object with options
 *
 * @returns The localized distance in words
 */
export type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: FormatDistanceFnOptions
) => string

/**
 * The {@link FormatDistanceFn} function options.
 */
export interface FormatDistanceFnOptions {
  /** Add "X ago"/"in X" in the locale language */
  addSuffix?: boolean
  /** The distance vector. -1 represents past and 1 future. Tells which suffix
   * to use. */
  comparison?: -1 | 0 | 1
}

/**
 * The function used inside the {@link FormatDistanceFn} function, implementing
 * formatting for a particular token.
 */
export type FormatDistanceTokenFn = (
  /** The distance as number to format */
  count: number,
  /** The object with options */
  options?: FormatDistanceFnOptions
) => string

/**
 * The tokens map to string templates used in the format distance function.
 * It looks like this:
 *
 *   const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
 *     lessThanXSeconds: 'តិចជាង {{count}} វិនាទី',
 *     xSeconds: '{{count}} វិនាទី',
 *     // ...
 *   }
 */
export type FormatDistanceLocale<Template> = {
  [Token in FormatDistanceToken]: Template
}

/**
 * The token used in the format distance function. Represents the distance unit
 * with prespecified precision.
 */
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

/// Format relative types

/**
 * The locale function that does the work for the `formatRelative` function.
 *
 * @param token - The token to localize
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - The object with options
 *
 * @returns The localized relative date format
 */
export type FormatRelativeFn = <DateType extends Date>(
  token: FormatRelativeToken,
  date: DateType,
  baseDate: DateType,
  options?: FormatRelativeFnOptions
) => string

/**
 * The {@link FormatRelativeFn} function options.
 */
export interface FormatRelativeFnOptions
  extends WeekOptions,
    LocalizedOptions {}

/**
 * The locale function used inside the {@link FormatRelativeFn} function
 * implementing formatting for a particular token.
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - The object with options
 */
export type FormatRelativeTokenFn = <DateType extends Date>(
  date: DateType | number,
  baseDate: DateType | number,
  options?: FormatRelativeTokenFnOptions
) => string

/**
 * The {@link FormatRelativeTokenFn} function options.
 */
export interface FormatRelativeTokenFnOptions extends WeekOptions {}

/**
 * The token used in format relative function. Represents the time unit.
 */
export type FormatRelativeToken =
  | 'lastWeek'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'nextWeek'
  | 'other'

/// Localize types

/**
 * The object with functions used to localize various values. Part of the public
 * locale API.
 */
export interface Localize {
  /** The function that localizes an ordinal number */
  ordinalNumber: LocalizeFn<number>
  /** The function that localized the era */
  era: LocalizeFn<Era>
  /** The function that localizes the quarter */
  quarter: LocalizeFn<Quarter>
  /** The function that localizes the month */
  month: LocalizeFn<Month>
  /** The function that localizes the day of the week */
  day: LocalizeFn<Day>
  /** The function that localizes the day period */
  dayPeriod: LocalizeFn<LocaleDayPeriod>
}

/**
 * Individual localize function. Part of {@link Localize}.
 *
 * @param value - The value to localize
 * @param options - The object with options
 *
 * @returns The localized string
 */
export type LocalizeFn<Value extends LocaleUnitValue | number> = (
  value: Value,
  options?: LocalizeFnOptions
) => string

/**
 * The {@link LocalizeFn} function options.
 */
export interface LocalizeFnOptions {
  /** The width to use formatting the value, defines how short or long
   * the formatted string might be.  */
  width?: LocaleWidth
  /** The context where the formatted value is used - standalone: the result
   * should make grammatical sense as is and formatting: the result is a part
   * of the formatted string. See: https://date-fns.org/docs/I18n-Contribution-Guide */
  context?: 'formatting' | 'standalone'
  /** The unit to format */
  unit?: LocaleUnit
}

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */
export type LocalizeFnArgCallback<Value extends LocaleUnitValue | number> = (
  value: Value
) => LocalizeUnitIndex<Value>

/**
 * The formatting unit value, represents the raw value that can be formatted.
 */
export type LocaleUnitValue = Era | Quarter | Month | Day | LocaleDayPeriod

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */
export type LocalizeUnitIndex<
  Value extends LocaleUnitValue | number
> = Value extends LocaleUnitValue ? keyof LocalizeValues<Value> : number

/**
 * Converts the unit value to the tuple of values.
 */
export type LocalizeValues<
  Value extends LocaleUnitValue
> = Value extends LocaleDayPeriod
  ? Record<LocaleDayPeriod, string>
  : Value extends Era
  ? LocalizeEraValues
  : Value extends Quarter
  ? LocalizeQuarterValues
  : Value extends Day
  ? LocalizeDayValues
  : Value extends Month
  ? LocalizeMonthValues
  : never

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */
export type LocalizeEraValues = readonly [string, string]

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */
export type LocalizeQuarterValues = readonly [string, string, string, string]

/**
 * The tuple of localized day values. The first element represents Sunday.
 */
export type LocalizeDayValues = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

/**
 * The tuple of localized month values. The first element represents January.
 */
export type LocalizeMonthValues = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

/**
 * The map of localized values for each width.
 */
export type LocalizePeriodValuesMap<Value extends LocaleUnitValue> = {
  [Pattern in LocaleWidth]?: LocalizeValues<Value>
}

/// Match types

/**
 * The object with functions used to match and parse various localized values.
 */
export interface Match {
  /** The function that parses a localized ordinal number. */
  ordinalNumber: MatchFn<number, { unit: LocaleUnit }>
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

export type MatchFn<Result, ExtraOptions = Record<string, unknown>> = (
  str: string,
  options?: {
    width?: LocaleWidth
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

export interface BuildMatchFnArgs<
  Result extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth
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

export type MatchPatterns<DefaultWidth extends LocaleWidth> = {
  [pattern in LocaleWidth]?: RegExp
} &
  { [key in DefaultWidth]: RegExp }

export type ParsePatterns<
  Value extends LocaleUnitValue,
  DefaultWidth extends LocaleWidth
> = {
  [pattern in LocaleWidth]?: ParsePattern<Value>
} &
  { [key in DefaultWidth]: ParsePattern<Value> }

export type ParsePattern<
  Value extends LocaleUnitValue
> = Value extends LocaleDayPeriod
  ? Record<LocaleDayPeriod, RegExp>
  : Value extends Quarter
  ? readonly [RegExp, RegExp, RegExp, RegExp]
  : Value extends Era
  ? readonly [RegExp, RegExp]
  : Value extends Day
  ? readonly [RegExp, RegExp, RegExp, RegExp, RegExp, RegExp, RegExp]
  : Value extends Month
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
  Value extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth
> = (
  args: BuildMatchFnArgs<Value, DefaultMatchWidth, DefaultParseWidth>
) => MatchFn<Value>

export type MatchValueCallback<Arg, Result> = (value: Arg) => Result

/// Format long types

/**
 * The object with functions that return localized formats. Long stands for
 * sequence of tokens (i.e. PPpp) that allows to define how format both date
 * and time at once. Part of the public locale API.
 */
export interface FormatLong {
  /** The function that returns a localized long date format */
  date: FormatLongFn
  /** The function that returns a localized long time format */
  time: FormatLongFn
  /** The function that returns a localized format of date and time combined */
  dateTime: FormatLongFn
}

/**
 * The format long function. Formats date, time or both.
 *
 * @param options - The object with options
 *
 * @returns The localized string
 */
export type FormatLongFn = (options: FormatLongFnOptions) => string

/**
 * The {@link FormatLongFn} function options.
 */
export interface FormatLongFnOptions {
  /** Format width to set */
  width?: FormatLongWidth
}

/**
 * The format long width token, defines how short or long the formnatted value
 * might be. The actual result length is defined by the locale.
 */
export type FormatLongWidth = 'full' | 'long' | 'medium' | 'short' | 'any'

/// Common types

/**
 * The format width. Defines how short or long the formatted string might be.
 * The actaul result length depends on the locale.
 */
export type LocaleWidth = 'narrow' | 'short' | 'abbreviated' | 'wide' | 'any'

/**
 * Token representing particular period of the day.
 */
export type LocaleDayPeriod =
  | 'am'
  | 'pm'
  | 'midnight'
  | 'noon'
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'night'

/**
 * The units commonly used in the date formatting or parsing.
 */
export type LocaleUnit =
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
