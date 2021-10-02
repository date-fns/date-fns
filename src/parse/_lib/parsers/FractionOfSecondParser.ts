import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// Fraction of second
export class FractionOfSecondParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['t', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (value) {
      return Math.floor(value * Math.pow(10, -token.length + 3))
    }
    return parseNDigits(token.length, string, valueCallback)
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCMilliseconds(value)
    return date
  }
}
