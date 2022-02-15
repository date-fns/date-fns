import type { LocaleDayPeriod, Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { dayPeriodEnumToHours } from '../utils'

export class AMPMMidnightParser extends Parser<LocaleDayPeriod> {
  priority = 80

  parse(
    dateString: string,
    token: string,
    match: Match
  ): ParseResult<LocaleDayPeriod> {
    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return (
          match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting',
          })
        )
      case 'bbbbb':
        return match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      case 'bbbb':
      default:
        return (
          match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting',
          }) ||
          match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting',
          })
        )
    }
  }

  set(date: Date, _flags: ParseFlags, value: LocaleDayPeriod): Date {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
    return date
  }

  incompatibleTokens = ['a', 'B', 'H', 'k', 't', 'T']
}
