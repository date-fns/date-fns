import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags, ParserOptions } from '../types'
import { Parser } from '../Parser'
import { mapValue, parseNDigits } from '../utils'
import setUTCDay from '../../../_lib/setUTCDay'

// Local day of week
export class LocalDayParser extends Parser<number> {
  priority = 90
  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions
  ): ParseResult<number> {
    const valueCallback = (value: number) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays
    }

    switch (token) {
      // 3
      case 'e':
      case 'ee': // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback)
      // 3rd
      case 'eo':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'day',
          }),
          valueCallback
        )
      // Tue
      case 'eee':
        return (
          match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.day(dateString, { width: 'short', context: 'formatting' }) ||
          match.day(dateString, { width: 'narrow', context: 'formatting' })
        )
      // T
      case 'eeeee':
        return match.day(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      // Tu
      case 'eeeeee':
        return (
          match.day(dateString, { width: 'short', context: 'formatting' }) ||
          match.day(dateString, { width: 'narrow', context: 'formatting' })
        )
      // Tuesday
      case 'eeee':
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
  validate(_date: Date, value: number): boolean {
    return value >= 0 && value <= 6
  }
  set(
    date: Date,
    _flags: ParseFlags,
    value: number,
    options: ParserOptions
  ): Date {
    date = setUTCDay(date, value, options)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
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
}
