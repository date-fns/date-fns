import type { Match } from '../../../locale/types'
import { numericPatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigits, parseNumericPattern } from '../utils'

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

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 59
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    date.setSeconds(value, 0)
    return date
  }

  incompatibleTokens = ['t', 'T']
}
