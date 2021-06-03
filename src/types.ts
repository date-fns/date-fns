import { Locale } from './locale/types'

export interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export interface Interval {
  start: Date | number
  end: Date | number
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

export type Era = 0 | 1

export type Quarter = 1 | 2 | 3 | 4

export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export type FirstWeekContainsDate = 1 | 4

export interface FirstWeekContainsDateOptions {
  firstWeekContainsDate?: FirstWeekContainsDate
}

export interface DateValues {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export type Unit = 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'year';
