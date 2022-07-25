import type { Match } from '../../../locale/types'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigits } from '../utils'

export class QuarterParser extends Parser<number> {
  priority = 120

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
      case 'QQ': // 01, 02, 03, 04
        return parseNDigits(token.length, dateString)
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return match.ordinalNumber(dateString, { unit: 'quarter' })
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return (
          match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting',
          })
        )
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return match.quarter(dateString, {
          width: 'narrow',
          context: 'formatting',
        })
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return (
          match.quarter(dateString, {
            width: 'wide',
            context: 'formatting',
          }) ||
          match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting',
          }) ||
          match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting',
          })
        )
    }
  }

  validate<DateType extends Date>(_date: DateType, value: number): boolean {
    return value >= 1 && value <= 4
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): DateType {
    date.setMonth((value - 1) * 3, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
    'Y',
    'R',
    'q',
    'M',
    'L',
    'w',
    'I',
    'd',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
}
