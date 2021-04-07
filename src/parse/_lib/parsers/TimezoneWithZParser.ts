import { AbstractParser } from './AbstractParser'
import { parseTimezonePattern } from '../utils'
import { timezonePatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

export class TimezoneWithZParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['t', 'T', 'x']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'X':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          string
        )
      case 'XX':
        return parseTimezonePattern(timezonePatterns.basic, string)
      case 'XXXX':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          string
        )
      case 'XXXXX':
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          string
        )
      case 'XXX':
      default:
        return parseTimezonePattern(timezonePatterns.extended, string)
    }
  }

  set(date: any, flags: any, value: any, _options: any) {
    if (flags.timestampIsSet) {
      return date
    }
    return new Date(date.getTime() - value)
  }
}
