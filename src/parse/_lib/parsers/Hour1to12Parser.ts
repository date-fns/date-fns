import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseNDigits,
  parseNumericPattern,
  parseMinNDigits,
} from "../utils.js";

export class Hour1to12Parser extends Parser<number> {
  priority = 70;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "h": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.hour12h;
        return parseNumericPattern(pattern, dateString);
      }
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return parseFn(token.length, dateString);
      }
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 1 && value <= 12;
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
