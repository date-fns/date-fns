import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'

// Hour [1-24]
export class HourFormatFrom1to24Parser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'a',
    'b',
    'h',
    'H',
    'K',
    't',
    'T',
  ]

  parse(string: any, token: any, match: any, _options: any) {
    switch (token) {
      case 'k':
        return parseNumericPattern(numericPatterns.hour24h, string)
      case 'ko':
        return match.ordinalNumber(string, { unit: 'hour' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 24
  }

  set(date: any, flags: any, value: any, _options: any) {
    var hours = value <= 24 ? value % 24 : value
    date.setUTCHours(hours, 0, 0, 0)
    return date
  }
}
