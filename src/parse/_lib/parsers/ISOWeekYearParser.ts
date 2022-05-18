import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { parseNDigitsSigned } from '../utils'
import startOfUTCISOWeek from '../../../_lib/startOfUTCISOWeek'

// ISO week-numbering year
export class ISOWeekYearParser extends Parser<number> {
  priority = 130

  parse(dateString: string, token: string): ParseResult<number> {
    if (token === 'R') {
      return parseNDigitsSigned(4, dateString)
    }

    return parseNDigitsSigned(token.length, dateString)
  }

  set(_date: Date, _flags: ParseFlags, value: number): Date {
    const firstWeekOfYear = new Date(0)
    firstWeekOfYear.setUTCFullYear(value, 0, 4)
    firstWeekOfYear.setUTCHours(0, 0, 0, 0)
    return startOfUTCISOWeek(firstWeekOfYear)
  }

  incompatibleTokens = [
    'G',
    'y',
    'Y',
    'u',
    'Q',
    'q',
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
