import type {
  LocaleOptions,
  FirstWeekContainsDateOptions,
  WeekStartOptions,
} from '../../../types'

export interface ParseFlags {
  timestampIsSet?: boolean
  era?: number
}

export type ParserOptions = LocaleOptions &
  FirstWeekContainsDateOptions &
  WeekStartOptions

export type ParseResult<TValue> = { value: TValue; rest: string } | null
