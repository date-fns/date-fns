import { AbstractParser } from './AbstractParser'
import setUTCDay from '../../../_lib/setUTCDay/index'
import { Match } from 'src/locale/types'

// Day of week
export class DayOfWeekParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['D', 'i', 'e', 'c', 't', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return (
          match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(string, { width: 'short', context: 'formatting' }) ||
          match.day(string, { width: 'narrow', context: 'formatting' })
        )
      // T
      case 'EEEEE':
        return match.day(string, { width: 'narrow', context: 'formatting' })
      // Tu
      case 'EEEEEE':
        return (
          match.day(string, { width: 'short', context: 'formatting' }) ||
          match.day(string, { width: 'narrow', context: 'formatting' })
        )
      // Tuesday
      case 'EEEE':
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
