import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import { numericPatterns } from "../constants.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseNDigitsSigned,
  parseExactNDigitsSigned,
  parseNumericPattern,
} from "../utils.js";

export class ExtendedYearParser extends Parser<number> {
  priority = 130;

  parse(
    dateString: string,
    token: string,
    _: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    if (options.strict) {
      if (token === "u") {
        return parseNumericPattern(
          numericPatterns.minSingleDigitSigned,
          dateString,
        );
      }

      return parseExactNDigitsSigned(token.length, dateString);
    } else {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }

      return parseNDigitsSigned(token.length, dateString);
    }
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
