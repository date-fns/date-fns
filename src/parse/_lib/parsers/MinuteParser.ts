import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import { parseNumericPattern } from "../utils.js";

export class MinuteParser extends Parser<number> {
  priority = 60;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "m": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.minute;
        return parseNumericPattern(pattern, dateString);
      }
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default: {
        const pattern = options.strict
          ? numericPatterns.minTwoDigits
          : numericPatterns.twoDigits;
        return parseNumericPattern(pattern, dateString);
      }
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 59;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}
