import type { Match } from '../../../locale/types'
import setDay from '../../../setDay/index'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult, ParserOptions } from '../types'

// Day of week
export class DayParser extends Parser<number> {
  priority = 90

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return (
          match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(dateString, { width: 'short', context: 'formatting' }) ||
          match.day(dateString, { width: 'narrow', context: 'formatting' })
        )
      // T
      case 'EEEEE':
        return match.day(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      // Tu
      case 'EEEEEE':
        return (
          match.day(dateString, { width: 'short', context: 'formatting' }) ||
          match.day(dateString, { width: 'narrow', context: 'formatting' })
        )
      // Tuesday
      case 'EEEE':
      default:
        return (
          match.day(dateString, { width: 'wide', context: 'formatting' }) ||
          match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(dateString, { width: 'short', context: 'formatting' }) ||
          match.day(dateString, { width: 'narrow', context: 'formatting' })
        )
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 6
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
    options: ParserOptions
  ): DateType {
    date = setDay(date, value, options)
    date.setHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['D', 'i', 'e', 'c', 't', 'T']
}
