import type { Match } from "../../../locale/types.js";
import { setISOWeek } from "../../../setISOWeek/index.js";
import { startOfISOWeek } from "../../../startOfISOWeek/index.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseNDigits,
  parseMinNDigits,
  parseNumericPattern,
} from "../utils.js";

// ISO week of year
export class ISOWeekParser extends Parser<number> {
  priority = 100;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "I": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.week;
        return parseNumericPattern(pattern, dateString);
      }
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return parseFn(token.length, dateString);
      }
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
