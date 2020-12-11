import { Locale } from './locale/types'

export interface Duration {
  years?: number | string
  months?: number | string
  weeks?: number | string
  days?: number | string
  hours?: number | string
  minutes?: number | string
  seconds?: number | string
}

export interface Interval {
  start: Date | number
  end: Date | number
}

export interface StepOptions {
  step?: number
}

export interface WeekStartOptions {
  weekStartsOn?: number
}

export interface LocalOptions {
  locale?: Locale
}
