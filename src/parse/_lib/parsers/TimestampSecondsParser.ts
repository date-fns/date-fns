import { constructFrom } from "../../../constructFrom/index.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
import { parseAnyDigitsSigned } from "../utils.js";

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
