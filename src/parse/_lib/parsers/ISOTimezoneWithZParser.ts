import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { timezonePatterns } from '../constants'
import { parseTimezonePattern } from '../utils'

// Timezone (ISO-8601. +00:00 is `'Z'`)
export class ISOTimezoneWithZParser extends Parser<number> {
  priority = 10

  parse(dateString: string, token: string): ParseResult<number> {
    switch (token) {
      case 'X':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        )
      case 'XX':
        return parseTimezonePattern(timezonePatterns.basic, dateString)
      case 'XXXX':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        )
      case 'XXXXX':
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        )
      case 'XXX':
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

  incompatibleTokens = ['t', 'T', 'x']
}
