import { AbstractParser } from './AbstractParser'
import { dayPeriodEnumToHours } from '../utils'
import { Match } from 'src/locale/types'

// AM or PM
export class AMOrPMParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
    'b',
    'B',
    'H',
    'K',
    'k',
    't',
    'T',
  ]

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return (
          match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(string, { width: 'narrow', context: 'formatting' })
        )
      case 'aaaaa':
        return match.dayPeriod(string, {
          width: 'narrow',
          context: 'formatting',
        })
      case 'aaaa':
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
