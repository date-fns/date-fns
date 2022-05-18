import type { LocaleDayPeriod, Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { dayPeriodEnumToHours } from '../utils'

export class AMPMParser extends Parser<LocaleDayPeriod> {
  priority = 80

  parse(
    dateString: string,
    token: string,
    match: Match
  ): ParseResult<LocaleDayPeriod> {
    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
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
      case 'aaaaa':
        return match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      case 'aaaa':
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

  incompatibleTokens = ['b', 'B', 'H', 'k', 't', 'T']
}
