import setUTCDay from '../../../_lib/setUTCDay/index'
import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// Stand-alone local day of week
export class StandAloneLocalDayOfWeekParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'y',
    'R',
    'u',
    'q',
    'Q',
    'M',
    'L',
    'I',
    'd',
    'D',
    'E',
    'i',
    'e',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (value) {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7
      return ((value + _options.weekStartsOn + 6) % 7) + wholeWeekDays
    }

    switch (token) {
      // 3
      case 'c':
      case 'cc': // 03
        return parseNDigits(token.length, string, valueCallback)
      // 3rd
      case 'co':
        return match.ordinalNumber(string, {
          unit: 'day',
          valueCallback: valueCallback,
        })
      // Tue
      case 'ccc':
        return (
          match.day(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.day(string, { width: 'short', context: 'standalone' }) ||
          match.day(string, { width: 'narrow', context: 'standalone' })
        )
      // T
      case 'ccccc':
        return match.day(string, { width: 'narrow', context: 'standalone' })
      // Tu
      case 'cccccc':
        return (
          match.day(string, { width: 'short', context: 'standalone' }) ||
          match.day(string, { width: 'narrow', context: 'standalone' })
        )
      // Tuesday
      case 'cccc':
      default:
        return (
          match.day(string, { width: 'wide', context: 'standalone' }) ||
          match.day(string, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.day(string, { width: 'short', context: 'standalone' }) ||
          match.day(string, { width: 'narrow', context: 'standalone' })
        )
    }
  }

  validate(_date, value, _options) {
    return value >= 0 && value <= 6
  }

  set(date: any, flags: any, value: any, _options: any) {
    date = setUTCDay(date, value, _options)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
