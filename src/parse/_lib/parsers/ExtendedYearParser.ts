import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigitsSigned } from '../utils'

export class ExtendedYearParser extends Parser<number> {
  priority = 130

  parse(dateString: string, token: string): ParseResult<number> {
    if (token === 'u') {
      return parseNDigitsSigned(4, dateString)
    }

    return parseNDigitsSigned(token.length, dateString)
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    date.setFullYear(value, 0, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
}
