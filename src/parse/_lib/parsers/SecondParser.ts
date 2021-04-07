import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Second
export class SecondParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['t', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 's':
        return parseNumericPattern(numericPatterns.second, string)
      case 'so':
        return match.ordinalNumber(string, { unit: 'second' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 59
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCSeconds(value, 0)
    return date
  }
}
