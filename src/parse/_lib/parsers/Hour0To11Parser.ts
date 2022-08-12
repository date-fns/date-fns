import type { Match } from '../../../locale/types'
import { numericPatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigits, parseNumericPattern } from '../utils'

export class Hour0To11Parser extends Parser<number> {
  priority = 70

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'K':
        return parseNumericPattern(numericPatterns.hour11h, dateString)
      case 'Ko':
        return match.ordinalNumber(dateString, { unit: 'hour' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 11
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    const isPM = date.getHours() >= 12
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0)
    } else {
      date.setHours(value, 0, 0, 0)
    }
    return date
  }

  incompatibleTokens = ['h', 'H', 'k', 't', 'T']
}
