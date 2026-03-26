import type { Match } from "../../../locale/types.ts";
import { setISOWeek } from "../../../setISOWeek/index.ts";
import { startOfISOWeek } from "../../../startOfISOWeek/index.ts";
import { numericPatterns } from "../constants.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseNDigits, parseNumericPattern } from "../utils.ts";

// ISO week of year
export class ISOWeekParser extends Parser<number> {
  priority = 100;

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 1 && value <= 53;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    return startOfISOWeek(setISOWeek(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}
