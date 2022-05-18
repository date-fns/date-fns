import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags, ParserOptions } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'
import setUTCWeek from '../../../_lib/setUTCWeek'
import startOfUTCWeek from '../../../_lib/startOfUTCWeek'

// Local week of year
export class LocalWeekParser extends Parser<number> {
  priority = 100

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'w':
        return parseNumericPattern(numericPatterns.week, dateString)
      case 'wo':
        return match.ordinalNumber(dateString, { unit: 'week' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 53
  }

  set(
    date: Date,
    _flags: ParseFlags,
    value: number,
    options: ParserOptions
  ): Date {
    return startOfUTCWeek(setUTCWeek(date, value, options), options)
  }

  incompatibleTokens = [
    'y',
    'R',
    'u',
    'q',
    'Q',
    'M',
    'L',
    'I',
    'd',
    'D',
    'i',
    't',
    'T',
  ]
}
