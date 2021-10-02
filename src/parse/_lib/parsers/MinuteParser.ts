import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Minute
export class MinuteParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['t', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'm':
        return parseNumericPattern(numericPatterns.minute, string)
      case 'mo':
        return match.ordinalNumber(string, { unit: 'minute' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 59
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCMinutes(value, 0, 0)
    return date
  }
}
