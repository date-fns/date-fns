import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Month
export class MonthParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'q',
    'Q',
    'L',
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
      case 'M':
        return parseNumericPattern(numericPatterns.month, string, valueCallback)
      // 01, 02, ..., 12
      case 'MM':
        return parseNDigits(2, string, valueCallback)
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return match.ordinalNumber(string, {
          unit: 'month',
          valueCallback: valueCallback,
        })
      // Jan, Feb, ..., Dec
      case 'MMM':
        return (
          match.month(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) || match.month(string, { width: 'narrow', context: 'formatting' })
        )
      // J, F, ..., D
      case 'MMMMM':
        return match.month(string, { width: 'narrow', context: 'formatting' })
      // January, February, ..., December
      case 'MMMM':
      default:
        return (
          match.month(string, { width: 'wide', context: 'formatting' }) ||
          match.month(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.month(string, { width: 'narrow', context: 'formatting' })
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
