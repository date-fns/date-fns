import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { mapValue, parseNDigits } from '../utils'
import setUTCISODay from '../../../_lib/setUTCISODay'

// ISO day of week
export class ISODayParser extends Parser<number> {
  priority = 90

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    const valueCallback = (value: number) => {
      if (value === 0) {
        return 7
      }
      return value
    }

    switch (token) {
      // 2
      case 'i':
      case 'ii': // 02
        return parseNDigits(token.length, dateString)
      // 2nd
      case 'io':
        return match.ordinalNumber(dateString, { unit: 'day' })
      // Tue
      case 'iii':
        return mapValue(
          match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
            match.day(dateString, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(dateString, {
              width: 'narrow',
              context: 'formatting',
            }),
          valueCallback
        )
      // T
      case 'iiiii':
        return mapValue(
          match.day(dateString, {
            width: 'narrow',
            context: 'formatting',
          }),
          valueCallback
        )
      // Tu
      case 'iiiiii':
        return mapValue(
          match.day(dateString, {
            width: 'short',
            context: 'formatting',
          }) ||
            match.day(dateString, {
              width: 'narrow',
              context: 'formatting',
            }),
          valueCallback
        )
      // Tuesday
      case 'iiii':
      default:
        return mapValue(
          match.day(dateString, {
            width: 'wide',
            context: 'formatting',
          }) ||
            match.day(dateString, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.day(dateString, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(dateString, {
              width: 'narrow',
              context: 'formatting',
            }),
          valueCallback
        )
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 7
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date = setUTCISODay(date, value)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
    'y',
    'Y',
    'u',
    'q',
    'Q',
    'M',
    'L',
    'w',
    'd',
    'D',
    'E',
    'e',
    'c',
    't',
    'T',
  ]
}
