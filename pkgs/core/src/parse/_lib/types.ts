import type { Day, FirstWeekContainsDate, Locale } from "../../types.ts";

export interface ParseFlags {
  timestampIsSet?: boolean;
  era?: number;
}

export type ParserOptions = {
  locale: Pick<Locale, "options">;
  firstWeekContainsDate: FirstWeekContainsDate;
  weekStartsOn: Day;
};

export type ParseResult<TValue> = { value: TValue; rest: string } | null;
