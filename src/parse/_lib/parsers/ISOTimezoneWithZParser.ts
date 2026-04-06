import { constructFrom } from "../../../constructFrom/index.ts";
import { getTimezoneOffsetInMilliseconds } from "../../../_lib/getTimezoneOffsetInMilliseconds/index.ts";
import { timezonePatterns } from "../constants.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseTimezonePattern } from "../utils.ts";

// Timezone (ISO-8601. +00:00 is `'Z'`)
export class ISOTimezoneWithZParser extends Parser<number> {
  priority = 10;

  parse(dateString: string, token: string): ParseResult<number> {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: number,
  ): DateType {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}
