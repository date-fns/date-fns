import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'

export class Hour1To24Parser extends Parser<number> {
  priority = 70

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'k':
        return parseNumericPattern(numericPatterns.hour24h, dateString)
      case 'ko':
        return match.ordinalNumber(dateString, { unit: 'hour' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 24
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    const hours = value <= 24 ? value % 24 : value
    date.setUTCHours(hours, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['a', 'b', 'h', 'H', 'K', 't', 'T']
}
