import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseNDigits,
  parseMinNDigits,
  parseNumericPattern,
} from "../utils.js";

export class Hour0To11Parser extends Parser<number> {
  priority = 70;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "K": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.hour11h;
        return parseNumericPattern(pattern, dateString);
      }
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return parseFn(token.length, dateString);
      }
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 11;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
