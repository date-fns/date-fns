import type { Match } from '../../../locale/types'
import { numericPatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigits, parseNumericPattern } from '../utils'

export class MinuteParser extends Parser<number> {
  priority = 60

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'm':
        return parseNumericPattern(numericPatterns.minute, dateString)
      case 'mo':
        return match.ordinalNumber(dateString, { unit: 'minute' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 59
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    date.setMinutes(value, 0, 0)
    return date
  }

  incompatibleTokens = ['t', 'T']
}
