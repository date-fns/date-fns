import { constructFrom } from "../../../constructFrom/index.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseAnyDigitsSigned } from "../utils.ts";

export class TimestampSecondsParser extends Parser<number> {
  priority = 40;

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString);
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): [DateType, ParseFlags] {
    return [constructFrom(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*" as const;
}
