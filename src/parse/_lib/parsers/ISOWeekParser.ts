import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'
import setUTCISOWeek from '../../../_lib/setUTCISOWeek'
import startOfUTCISOWeek from '../../../_lib/startOfUTCISOWeek'

// ISO week of year
export class ISOWeekParser extends Parser<number> {
  priority = 100

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'I':
        return parseNumericPattern(numericPatterns.week, dateString)
      case 'Io':
        return match.ordinalNumber(dateString, { unit: 'week' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 53
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    return startOfUTCISOWeek(setUTCISOWeek(date, value))
  }

  incompatibleTokens = [
    'y',
    'Y',
    'u',
    'q',
    'Q',
    'M',
    'L',
    'w',
    'd',
    'D',
    'e',
    'c',
    't',
    'T',
  ]
}
