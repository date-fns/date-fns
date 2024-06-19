import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  isLeapYearIndex,
  parseNDigits,
  parseMinNDigits,
  parseNumericPattern,
} from "../utils.js";

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
export class DateParser extends Parser<number> {
  priority = 90;
  subPriority = 1;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    switch (token) {
      case "d": {
        const pattern = options.strict
          ? numericPatterns.minSingleDigits
          : numericPatterns.date;
        return parseNumericPattern(pattern, dateString);
      }
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return parseFn(token.length, dateString);
      }
    }
  }

  validate<DateType extends Date>(date: DateType, value: number): boolean {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}
