import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'

export class Hour1to12Parser extends Parser<number> {
  priority = 70

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'h':
        return parseNumericPattern(numericPatterns.hour12h, dateString)
      case 'ho':
        return match.ordinalNumber(dateString, { unit: 'hour' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 12
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    const isPM = date.getUTCHours() >= 12
    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0)
    } else if (!isPM && value === 12) {
      date.setUTCHours(0, 0, 0, 0)
    } else {
      date.setUTCHours(value, 0, 0, 0)
    }
    return date
  }

  incompatibleTokens = ['H', 'K', 'k', 't', 'T']
}
