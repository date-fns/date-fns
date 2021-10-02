import { AbstractParser } from './AbstractParser'
import { parseTimezonePattern } from '../utils'
import { timezonePatterns } from '../utils/constants'
import { Match } from 'src/locale/types'

export class TimezoneWithoutZParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['t', 'T', 'X']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'x':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          string
        )
      case 'xx':
        return parseTimezonePattern(timezonePatterns.basic, string)
      case 'xxxx':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          string
        )
      case 'xxxxx':
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          string
        )
      case 'xxx':
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
