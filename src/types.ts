import Locale from './_types/Locale'

export type AdditionaDigits = 0 | 1 | 2

export interface AdditionalDigitsOptions {
  additionalDigits?: AdditionaDigits
}

export interface LocaleOptions {
  locale?: Locale
}

export type WeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface WeekStartOptions {
  weekStartsOn?: WeekStart
}

export type WeekFnOptions = LocaleOptions & WeekStartOptions

export type FirstWeekContainsDate = 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface WeekYearOptions {
  firstWeekContainsDate?: FirstWeekContainsDate
}

export type WeekYearFnOptions = LocaleOptions &
  WeekStartOptions &
  WeekYearOptions

export interface DateValues {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}
