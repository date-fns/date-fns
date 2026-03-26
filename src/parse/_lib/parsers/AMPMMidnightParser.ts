import type { LocaleDayPeriod, Match } from "../../../locale/types.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { dayPeriodEnumToHours } from "../utils.ts";

export class AMPMMidnightParser extends Parser<LocaleDayPeriod> {
  priority = 80;

  parse(
    dateString: string,
    token: string,
    match: Match,
  ): ParseResult<LocaleDayPeriod> {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: LocaleDayPeriod,
  ): DateType {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
