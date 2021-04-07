import { AbstractParser } from './AbstractParser'
import { parseNumericPattern, parseNDigits } from '../utils'
import { numericPatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

// Hour [1-12]
export class HourFormatFrom1to12Parser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['H', 'K', 'k', 't', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'h':
        return parseNumericPattern(numericPatterns.hour12h, string)
      case 'ho':
        return match.ordinalNumber(string, { unit: 'hour' })
      default:
        return parseNDigits(token.length, string)
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 12
  }

  set(date: any, flags: any, value: any, _options: any) {
    const isPM = date.getUTCHours() >= 12
    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0)
    } else if (!isPM && value === 12) {
      date.setUTCHours(0, 0, 0, 0)
    } else {
      date.setUTCHours(value, 0, 0, 0)
    }
    return date
  }
}
