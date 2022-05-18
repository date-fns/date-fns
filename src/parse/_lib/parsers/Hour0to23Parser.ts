import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'

export class Hour0to23Parser extends Parser<number> {
  priority = 70

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'H':
        return parseNumericPattern(numericPatterns.hour23h, dateString)
      case 'Ho':
        return match.ordinalNumber(dateString, { unit: 'hour' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 0 && value <= 23
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCHours(value, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['a', 'b', 'h', 'K', 'k', 't', 'T']
}
