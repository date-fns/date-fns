import Locale from '../Locale'

export interface AreIntervalsOverlappingOptions {
  inclusive?: boolean
}

export interface LocaleFnOptions {
  locale?: Locale
}

export interface WeekFnOptions extends LocaleFnOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface WeekYearFnOptions extends WeekFnOptions {
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export interface EachWeekOfIntervalOptions {
  step?: number
}

export interface FormatAndParseOptions extends WeekYearFnOptions {
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYeahTokens?: boolean
}

export interface FormatDistanceOptions extends LocaleFnOptions {
  includeSeconds?: boolean
  addSuffix?: boolean
}

export interface FormatDistanceStringOptions extends LocaleFnOptions {
  addSuffix?: boolean
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
  roundingMethod?: 'floor' | 'ceil' | 'round'
}

export interface FormatISOOptions {
  format?: 'extended' | 'basic'
  representation?: 'complete' | 'date' | 'time'
}

export interface FormatRFC3339Options {
  fractionDigits?: 0 | 1 | 2 | 3
}

type FormatDurationFormatString = 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds'
export interface FormatDurationOptions extends LocaleFnOptions {
  format?: FormatDurationFormatString[]
  zero?: boolean
  delimiter?: string
}

export interface ParseISOOptions {
  additionalDigits?: 0 | 1 | 2
}

export interface RoundToNearestMinutesOptions {
  nearestTo?: number
}

