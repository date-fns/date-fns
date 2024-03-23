import type {
  LocalizedOptions,
  FirstWeekContainsDateOptions,
  WeekOptions,
} from "../../types.js";

export interface ParseFlags {
  timestampIsSet?: boolean;
  era?: number;
}

export type StrictModeOptions = {
  strict?: boolean;
};

export type ParserOptions = Required<
  LocalizedOptions<"options"> &
    FirstWeekContainsDateOptions &
    WeekOptions &
    StrictModeOptions
>;

export type ParseResult<TValue> = { value: TValue; rest: string } | null;
