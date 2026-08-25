import { constructFrom } from "../../../constructFrom/index.ts";
import { getTimezoneOffsetInMilliseconds } from "../../../_lib/getTimezoneOffsetInMilliseconds/index.ts";
import { timezonePatternsWithoutZ } from "../constants.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseTimezonePattern } from "../utils.ts";

// Timezone (ISO-8601)
export class ISOTimezoneParser extends Parser<number> {
  priority = 10;

  parse(dateString: string, token: string): ParseResult<number> {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatternsWithoutZ.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return parseTimezonePattern(timezonePatternsWithoutZ.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatternsWithoutZ.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatternsWithoutZ.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return parseTimezonePattern(
          timezonePatternsWithoutZ.extended,
          dateString,
        );
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

  incompatibleTokens = ["t", "T", "X"];
}
