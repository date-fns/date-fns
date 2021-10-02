import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Hour [0-11]
export class HourFormatFrom0to11Parser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'a',
    'b',
    'h',
    'H',
    'k',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'K':
        return parseNumericPattern(numericPatterns.hour11h, string)
      case 'Ko':
        return match.ordinalNumber(string, { unit: 'hour' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 11
  }

  set(date: any, flags: any, value: any, _options: any) {
    const isPM = date.getUTCHours() >= 12
    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0)
    } else {
      date.setUTCHours(value, 0, 0, 0)
    }
    return date
  }
}
