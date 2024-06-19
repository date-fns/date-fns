import { getWeekYear } from "../../../getWeekYear/index.js";
import type { Match } from "../../../locale/types.js";
import { startOfWeek } from "../../../startOfWeek/index.js";
import { Parser } from "../Parser.js";
import { numericPatterns } from "../constants.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import {
  mapValue,
  normalizeTwoDigitYear,
  parseNDigits,
  parseNumericPattern,
  parseMinNDigits,
} from "../utils.js";
import type { YearParserValue } from "./YearParser.js";

// Local week-numbering year
export class LocalWeekYearParser extends Parser<YearParserValue> {
  priority = 130;

  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<YearParserValue> {
    const valueCallback = (year: number) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return options.strict
          ? mapValue(parseMinNDigits(1, dateString), valueCallback)
          : mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      case "YY": {
        const pattern = options.strict
          ? numericPatterns.exactTwoDigits
          : numericPatterns.twoDigits;
        return mapValue(
          parseNumericPattern(pattern, dateString),
          valueCallback,
        );
      }
      default: {
        const parseFn = options.strict ? parseMinNDigits : parseNDigits;
        return mapValue(parseFn(token.length, dateString), valueCallback);
      }
    }
  }

  validate<DateType extends Date>(
    _date: DateType,
    value: YearParserValue,
  ): boolean {
    return value.isTwoDigitYear || value.year > 0;
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: YearParserValue,
    options: ParserOptions,
  ): DateType {
    const currentYear = getWeekYear(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}
