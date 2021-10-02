import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// Quarter
export class QuarterParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'q',
    'M',
    'L',
    'w',
    'I',
    'd',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
      case 'QQ': // 01, 02, 03, 04
        return parseNDigits(token.length, string)
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return match.ordinalNumber(string, { unit: 'quarter' })
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return (
          match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.quarter(string, { width: 'narrow', context: 'formatting' })
        )
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return match.quarter(string, {
          width: 'narrow',
          context: 'formatting',
        })
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return (
          match.quarter(string, { width: 'wide', context: 'formatting' }) ||
          match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.quarter(string, { width: 'narrow', context: 'formatting' })
        )
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 4
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCMonth((value - 1) * 3, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
