import { AbstractParser } from './AbstractParser'
import { dayPeriodEnumToHours } from '../utils'
import { Match, Flags } from 'src/locale/types'
import { ParseOutput, ParseOptions } from '../types'

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

  parse(
    string: string,
    token: string,
    match: Match,
    _options: ParseOptions
  ): ParseOutput {
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

  set(
    date: Date,
    flags: Flags,
    value: unknown,
    _options: ParseOptions
  ): Date | [Date, Flags] {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
    return date
  }
}
