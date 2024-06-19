import type { Match } from "../../../locale/types.js";
import { startOfISOWeek } from "../../../startOfISOWeek/index.js";
import { constructFrom } from "../../../constructFrom/index.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  parseExactNDigitsSigned,
  parseNDigitsSigned,
  parseNumericPattern,
} from "../utils.js";
import { numericPatterns } from "../constants.js";

// ISO week-numbering year
export class ISOWeekYearParser extends Parser<number> {
  priority = 130;

  parse(
    dateString: string,
    token: string,
    _: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    if (options.strict) {
      if (token === "R") {
        return parseNumericPattern(
          numericPatterns.minSingleDigitSigned,
          dateString,
        );
      }

      return parseExactNDigitsSigned(token.length, dateString);
    } else {
      if (token === "R") {
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
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
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
