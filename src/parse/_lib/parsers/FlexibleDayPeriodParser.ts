import { AbstractParser } from './AbstractParser'
import { dayPeriodEnumToHours } from '../utils'
import { Match } from 'src/locale/types'

// in the morning, in the afternoon, in the evening, at night
export class FlexibleDayPeriodParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['a', 'b', 't', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return (
          match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(string, { width: 'narrow', context: 'formatting' })
        )
      case 'BBBBB':
        return match.dayPeriod(string, {
          width: 'narrow',
          context: 'formatting',
        })
      case 'BBBB':
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
