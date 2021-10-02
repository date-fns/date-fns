import setUTCDay from '../../../_lib/setUTCDay/index'
import { AbstractParser } from './AbstractParser'
import { parseNDigits } from '../utils'
import { Match } from 'src/locale/types'

// Local day of week
export class LocalDayOfWeekParser extends AbstractParser {
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
    'c',
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
      case 'e':
      case 'ee': // 03
        return parseNDigits(token.length, string, valueCallback)
      // 3rd
      case 'eo':
        return match.ordinalNumber(string, {
          unit: 'day',
          valueCallback: valueCallback,
        })
      // Tue
      case 'eee':
        return (
          match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(string, { width: 'short', context: 'formatting' }) ||
          match.day(string, { width: 'narrow', context: 'formatting' })
        )
      // T
      case 'eeeee':
        return match.day(string, { width: 'narrow', context: 'formatting' })
      // Tu
      case 'eeeeee':
        return (
          match.day(string, { width: 'short', context: 'formatting' }) ||
          match.day(string, { width: 'narrow', context: 'formatting' })
        )
      // Tuesday
      case 'eeee':
      default:
        return (
          match.day(string, { width: 'wide', context: 'formatting' }) ||
          match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(string, { width: 'short', context: 'formatting' }) ||
          match.day(string, { width: 'narrow', context: 'formatting' })
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
