import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
import { mapValue, parseNDigits, parseExactNDigits } from "../utils.js";

export class FractionOfSecondParser extends Parser<number> {
  priority = 30;

  parse(
    dateString: string,
    token: string,
    _: Match,
    options: ParserOptions,
  ): ParseResult<number> {
    const valueCallback = (value: number) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    const parseFn = options.strict ? parseExactNDigits : parseNDigits;
    return mapValue(parseFn(token.length, dateString), valueCallback);
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}
