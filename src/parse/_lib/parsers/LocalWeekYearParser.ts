import getWeekYear from '../../../getWeekYear/index'
import type { Match } from '../../../locale/types'
import startOfWeek from '../../../startOfWeek/index'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult, ParserOptions } from '../types'
import { mapValue, normalizeTwoDigitYear, parseNDigits } from '../utils'
import type { YearParserValue } from './YearParser'

// Local week-numbering year
export class LocalWeekYearParser extends Parser<YearParserValue> {
  priority = 130

  parse(
    dateString: string,
    token: string,
    match: Match
  ): ParseResult<YearParserValue> {
    const valueCallback = (year: number) => ({
      year,
      isTwoDigitYear: token === 'YY',
    })

    switch (token) {
      case 'Y':
        return mapValue(parseNDigits(4, dateString), valueCallback)
      case 'Yo':
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: 'year',
          }),
          valueCallback
        )
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback)
    }
  }

  validate<DateType extends Date>(
    _date: DateType,
    value: YearParserValue
  ): boolean {
    return value.isTwoDigitYear || value.year > 0
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: YearParserValue,
    options: ParserOptions
  ): DateType {
    const currentYear = getWeekYear(date, options)

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      )
      date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate)
      date.setHours(0, 0, 0, 0)
      return startOfWeek(date, options)
    }

    const year =
      !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
    date.setFullYear(year, 0, options.firstWeekContainsDate)
    date.setHours(0, 0, 0, 0)
    return startOfWeek(date, options)
  }

  incompatibleTokens = [
    'y',
    'R',
    'u',
    'Q',
    'q',
    'M',
    'L',
    'I',
    'd',
    'D',
    'i',
    't',
    'T',
  ]
}
