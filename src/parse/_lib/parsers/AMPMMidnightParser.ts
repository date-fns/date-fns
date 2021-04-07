import { AbstractParser } from './AbstractParser'
import { dayPeriodEnumToHours } from '../utils'
import { Match } from 'src/locale/types'

// AM, PM, midnight
export class AMPMMidnightParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'a',
    'B',
    'H',
    'K',
    'k',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return (
          match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(string, { width: 'narrow', context: 'formatting' })
        )
      case 'bbbbb':
        return match.dayPeriod(string, {
          width: 'narrow',
          context: 'formatting',
        })
      case 'bbbb':
      default:
        return (
          match.dayPeriod(string, { width: 'wide', context: 'formatting' }) ||
          match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(string, { width: 'narrow', context: 'formatting' })
        )
    }
  }

  set(date: any, flags: any, value: any, _options: any) {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
    return date
  }
}
