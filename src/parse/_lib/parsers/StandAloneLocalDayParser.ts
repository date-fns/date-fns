import type { Match } from '../../../locale/types'
import setDay from '../../../setDay/index'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult, ParserOptions } from '../types'
import { mapValue, parseNDigits } from '../utils'

// Stand-alone local day of week
export class StandAloneLocalDayParser extends Parser<number> {
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
      case 'c':
      case 'cc': // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback)
      // 3rd
      case 'co':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'day',
          }),
          valueCallback
        )
      // Tue
      case 'ccc':
        return (
          match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.day(dateString, { width: 'short', context: 'standalone' }) ||
          match.day(dateString, { width: 'narrow', context: 'standalone' })
        )
      // T
      case 'ccccc':
        return match.day(dateString, {
          width: 'narrow',
          context: 'standalone',
        })
      // Tu
      case 'cccccc':
        return (
          match.day(dateString, { width: 'short', context: 'standalone' }) ||
          match.day(dateString, { width: 'narrow', context: 'standalone' })
        )
      // Tuesday
      case 'cccc':
      default:
        return (
          match.day(dateString, { width: 'wide', context: 'standalone' }) ||
          match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone',
          }) ||
          match.day(dateString, { width: 'short', context: 'standalone' }) ||
          match.day(dateString, { width: 'narrow', context: 'standalone' })
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
    'e',
    't',
    'T',
  ]
}
