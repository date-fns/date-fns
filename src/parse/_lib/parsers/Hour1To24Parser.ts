import type { Match } from "../../../locale/types.ts";
import { numericPatterns } from "../constants.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseNDigits, parseNumericPattern } from "../utils.ts";

export class Hour1To24Parser extends Parser<number> {
  priority = 70;

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 1 && value <= 24;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
