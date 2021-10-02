import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Hour [0-23]
export class HourFormatFrom0to23Parser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'a',
    'b',
    'h',
    'K',
    'k',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'H':
        return parseNumericPattern(numericPatterns.hour23h, string)
      case 'Ho':
        return match.ordinalNumber(string, { unit: 'hour' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 23
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCHours(value, 0, 0, 0)
    return date
  }
}
