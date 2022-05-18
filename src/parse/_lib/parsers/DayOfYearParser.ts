import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits, isLeapYearIndex } from '../utils'

export class DayOfYearParser extends Parser<number> {
  priority = 90

  subpriority = 1

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'D':
      case 'DD':
        return parseNumericPattern(numericPatterns.dayOfYear, dateString)
      case 'Do':
        return match.ordinalNumber(dateString, { unit: 'date' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(date: Date, value: number): boolean {
    const year = date.getUTCFullYear()
    const isLeapYear = isLeapYearIndex(year)
    if (isLeapYear) {
      return value >= 1 && value <= 366
    } else {
      return value >= 1 && value <= 365
    }
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCMonth(0, value)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
    'Y',
    'R',
    'q',
    'Q',
    'M',
    'L',
    'w',
    'I',
    'd',
    'E',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
}
