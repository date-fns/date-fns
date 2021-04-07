import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// Stand-alone quarter
export class StandAloneQuarterParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'Y',
    'R',
    'Q',
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
      case 'q':
      case 'qq': // 01, 02, 03, 04
        return parseNDigits(token.length, string)
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return match.ordinalNumber(string, { unit: 'quarter' })
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return (
          match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.quarter(string, { width: 'narrow', context: 'standalone' })
        )
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return match.quarter(string, {
          width: 'narrow',
          context: 'standalone',
        })
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return (
          match.quarter(string, { width: 'wide', context: 'standalone' }) ||
          match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.quarter(string, { width: 'narrow', context: 'standalone' })
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
