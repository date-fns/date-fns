import { AbstractParser } from './AbstractParser'
import { parseNDigitsSigned } from '../utils'
import { Match } from 'src/locale/types'

// Extended year
export class ExtendedYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'G',
    'y',
    'Y',
    'R',
    'w',
    'I',
    'i',
    'e',
    'c',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    if (token === 'u') {
      return parseNDigitsSigned(4, string)
    }

    return parseNDigitsSigned(token.length, string)
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCFullYear(value, 0, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
