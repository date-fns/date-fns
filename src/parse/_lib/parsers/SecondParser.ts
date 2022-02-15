import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'

export class SecondParser extends Parser<number> {
  priority = 50

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 's':
        return parseNumericPattern(numericPatterns.second, dateString)
      case 'so':
        return match.ordinalNumber(dateString, { unit: 'second' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 0 && value <= 59
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCSeconds(value, 0)
    return date
  }

  incompatibleTokens = ['t', 'T']
}
