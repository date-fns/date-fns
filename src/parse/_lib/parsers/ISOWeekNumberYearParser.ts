import startOfUTCISOWeek from '../../../_lib/startOfUTCISOWeek/index'
import { AbstractParser } from './AbstractParser'
import { parseNDigitsSigned } from '../utils'
import { Match } from 'src/locale/types'

// ISO week-numbering year
export class ISOWeekNumberYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
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

  parse(string: any, token: any, match: Match, _options: any) {
    if (token === 'R') {
      return parseNDigitsSigned(4, string)
    }

    return parseNDigitsSigned(token.length, string)
  }

  set(date: any, flags: any, value: any, _options: any) {
    const firstWeekOfYear = new Date(0)
    firstWeekOfYear.setUTCFullYear(value, 0, 4)
    firstWeekOfYear.setUTCHours(0, 0, 0, 0)
    return startOfUTCISOWeek(firstWeekOfYear)
  }
}
