import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { timezonePatterns } from '../constants'
import { parseTimezonePattern } from '../utils'

// Timezone (ISO-8601)
export class ISOTimezoneParser extends Parser<number> {
  priority = 10

  parse(dateString: string, token: string): ParseResult<number> {
    switch (token) {
      case 'x':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        )
      case 'xx':
        return parseTimezonePattern(timezonePatterns.basic, dateString)
      case 'xxxx':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        )
      case 'xxxxx':
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        )
      case 'xxx':
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString)
    }
  }

  set(date: Date, flags: ParseFlags, value: number): Date {
    if (flags.timestampIsSet) {
      return date
    }
    return new Date(date.getTime() - value)
  }

  incompatibleTokens = ['t', 'T', 'X']
}
