import type {
  LocalizedOptions,
  FirstWeekContainsDateOptions,
  WeekOptions,
} from "../../types.ts";

export interface ParseFlags {
  timestampIsSet?: boolean | undefined;
  era?: number | undefined;
}

export type ParserOptions = {
  [
    K in keyof (LocalizedOptions<"options"> &
      FirstWeekContainsDateOptions &
      WeekOptions)
  ]-?: NonNullable<
    (LocalizedOptions<"options"> &
      FirstWeekContainsDateOptions &
      WeekOptions)[K]
  >;
};

export type ParseResult<TValue> = { value: TValue; rest: string } | null;
