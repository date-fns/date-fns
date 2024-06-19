import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseNDigits,
  parseNumericPattern,
  parseMinNDigits,
} from "../utils.js";

export class Hour0to23Parser extends Parser<number> {
  priority = 70;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "H": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.hour23h;
        return parseNumericPattern(pattern, dateString);
      }
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return parseFn(token.length, dateString);
      }
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 23;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
