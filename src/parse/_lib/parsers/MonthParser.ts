import type { Match } from '../../../locale/types'
import { numericPatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { mapValue, parseNDigits, parseNumericPattern } from '../utils'

export class MonthParser extends Parser<number> {
  incompatibleTokens = [
    'Y',
    'R',
    'q',
    'Q',
    'L',
    'w',
    'I',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
  priority = 110

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    const valueCallback = (value: number) => value - 1

    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        )
      // 01, 02, ..., 12
      case 'MM':
        return mapValue(parseNDigits(2, dateString), valueCallback)
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'month',
          }),
          valueCallback
        )
      // Jan, Feb, ..., Dec
      case 'MMM':
        return (
          match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.month(dateString, { width: 'narrow', context: 'formatting' })
        )
      // J, F, ..., D
      case 'MMMMM':
        return match.month(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      // January, February, ..., December
      case 'MMMM':
      default:
        return (
          match.month(dateString, { width: 'wide', context: 'formatting' }) ||
          match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.month(dateString, { width: 'narrow', context: 'formatting' })
        )
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 0 && value <= 11
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    date.setMonth(value, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }
}
