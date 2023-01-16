import type {
  LocaleOptions,
  FirstWeekContainsDateOptions,
  WeekOptions,
} from '../../types'

export interface ParseFlags {
  timestampIsSet?: boolean
  era?: number
}

export type ParserOptions = Required<
  LocaleOptions & FirstWeekContainsDateOptions & WeekOptions
>

export type ParseResult<TValue> = { value: TValue; rest: string } | null
