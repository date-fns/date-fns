import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { parseNDigitsSigned } from '../utils'

export class ExtendedYearParser extends Parser<number> {
  priority = 130

  parse(dateString: string, token: string): ParseResult<number> {
    if (token === 'u') {
      return parseNDigitsSigned(4, dateString)
    }

    return parseNDigitsSigned(token.length, dateString)
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCFullYear(value, 0, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
}
