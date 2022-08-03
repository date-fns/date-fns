import constructFrom from '../../../constructFrom/index'
import getTimezoneOffsetInMilliseconds from '../../../_lib/getTimezoneOffsetInMilliseconds/index'
import { timezonePatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
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

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: number
  ): DateType {
    if (flags.timestampIsSet) return date
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    )
  }

  incompatibleTokens = ['t', 'T', 'X']
}
