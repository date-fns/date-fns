import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
import { mapValue, parseNDigits } from "../utils.js";

export class FractionOfSecondParser extends Parser<number> {
  priority = 30;

  parse(dateString: string, token: string): ParseResult<number> {
    const valueCallback = (value: number) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
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
