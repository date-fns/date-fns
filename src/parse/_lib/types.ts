import type {
  LocalizedOptions,
  FirstWeekContainsDateOptions,
  WeekOptions,
} from '../../types'

export interface ParseFlags {
  timestampIsSet?: boolean
  era?: number
}

export type ParserOptions = Required<
  LocalizedOptions & FirstWeekContainsDateOptions & WeekOptions
>

export type ParseResult<TValue> = { value: TValue; rest: string } | null
