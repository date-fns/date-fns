import setUTCISOWeek from '../../../_lib/setUTCISOWeek/index'
import startOfUTCISOWeek from '../../../_lib/startOfUTCISOWeek/index'
import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// ISO week of year
export class ISOWeekYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
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

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'I':
        return parseNumericPattern(numericPatterns.week, string)
      case 'Io':
        return match.ordinalNumber(string, { unit: 'week' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 53
  }

  set(date: any, flags: any, value: any, _options: any) {
    return startOfUTCISOWeek(setUTCISOWeek(date, value, _options), _options)
  }
}
