import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Stand-alone month
export class StandAloneMonthParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
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

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (value) {
      return value - 1
    }

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return parseNumericPattern(numericPatterns.month, string, valueCallback)
      // 01, 02, ..., 12
      case 'LL':
        return parseNDigits(2, string, valueCallback)
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return match.ordinalNumber(string, {
          unit: 'month',
          valueCallback: valueCallback,
        })
      // Jan, Feb, ..., Dec
      case 'LLL':
        return (
          match.month(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) || match.month(string, { width: 'narrow', context: 'standalone' })
        )
      // J, F, ..., D
      case 'LLLLL':
        return match.month(string, { width: 'narrow', context: 'standalone' })
      // January, February, ..., December
      case 'LLLL':
      default:
        return (
          match.month(string, { width: 'wide', context: 'standalone' }) ||
          match.month(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.month(string, { width: 'narrow', context: 'standalone' })
        )
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 11
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCMonth(value, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
