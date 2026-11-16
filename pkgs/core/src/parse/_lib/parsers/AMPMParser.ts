import type { LocaleDayPeriod, Match } from "../../../locale/types.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { dayPeriodEnumToHours } from "../utils.ts";

export class AMPMParser extends Parser<LocaleDayPeriod> {
  priority = 80;

  parse(
    dateString: string,
    token: string,
    match: Match,
  ): ParseResult<LocaleDayPeriod> {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
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
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
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

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
