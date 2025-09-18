import { constructFrom } from "../../../constructFrom/index.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseAnyDigitsSigned } from "../utils.ts";

export class TimestampMillisecondsParser extends Parser<number> {
  priority = 20;

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString);
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): [DateType, ParseFlags] {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*" as const;
}
