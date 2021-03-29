import { AbstractParser } from './AbstractParser'
import { parseAnyDigitsSigned } from '../utils'

// Seconds timestamp
export class SecondsTimestampParser extends AbstractParser {
  public readonly incompatibleTokens: string = '*'

  parse(string: any, token: any, match: any, _options: any) {
    return parseAnyDigitsSigned(string)
  }

  set(date: any, flags: any, value: any, _options: any) {
    return [new Date(value * 1000), { timestampIsSet: true }]
  }
}
