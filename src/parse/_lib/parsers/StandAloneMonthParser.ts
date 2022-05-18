import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits, mapValue } from '../utils'

export class StandAloneMonthParser extends Parser<number> {
  priority = 110

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    const valueCallback = (value: number) => value - 1

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        )
      // 01, 02, ..., 12
      case 'LL':
        return mapValue(parseNDigits(2, dateString), valueCallback)
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'month',
          }),
          valueCallback
        )
      // Jan, Feb, ..., Dec
      case 'LLL':
        return (
          match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.month(dateString, { width: 'narrow', context: 'standalone' })
        )
      // J, F, ..., D
      case 'LLLLL':
        return match.month(dateString, {
          width: 'narrow',
          context: 'standalone',
        })
      // January, February, ..., December
      case 'LLLL':
      default:
        return (
          match.month(dateString, { width: 'wide', context: 'standalone' }) ||
          match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.month(dateString, { width: 'narrow', context: 'standalone' })
        )
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 0 && value <= 11
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCMonth(value, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
    'Y',
    'R',
    'q',
    'Q',
    'M',
    'w',
    'I',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
}
