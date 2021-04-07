import setUTCISODay from '../../../_lib/setUTCISODay/index'
import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// ISO day of week
export class ISODayOfWeekParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
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

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (value) {
      if (value === 0) {
        return 7
      }
      return value
    }

    switch (token) {
      // 2
      case 'i':
      case 'ii': // 02
        return parseNDigits(token.length, string)
      // 2nd
      case 'io':
        return match.ordinalNumber(string, { unit: 'day' })
      // Tue
      case 'iii':
        return (
          match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback,
          })
        )
      // T
      case 'iiiii':
        return match.day(string, {
          width: 'narrow',
          context: 'formatting',
          valueCallback: valueCallback,
        })
      // Tu
      case 'iiiiii':
        return (
          match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback,
          })
        )
      // Tuesday
      case 'iiii':
      default:
        return (
          match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback,
          }) ||
          match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback,
          })
        )
    }
  }

  validate(_date, value, _options) {
    return value >= 1 && value <= 7
  }

  set(date: any, flags: any, value: any, _options: any) {
    date = setUTCISODay(date, value, _options)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
