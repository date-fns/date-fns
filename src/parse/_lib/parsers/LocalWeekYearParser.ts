import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags, ParserOptions } from '../types'
import { Parser } from '../Parser'
import { parseNDigits, normalizeTwoDigitYear, mapValue } from '../utils'
import getUTCWeekYear from '../../../_lib/getUTCWeekYear'
import startOfUTCWeek from '../../../_lib/startOfUTCWeek'
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

  validate(_date: Date, value: YearParserValue): boolean {
    return value.isTwoDigitYear || value.year > 0
  }

  set(
    date: Date,
    flags: ParseFlags,
    value: YearParserValue,
    options: ParserOptions
  ): Date {
    const currentYear = getUTCWeekYear(date, options)

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      )
      date.setUTCFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      )
      date.setUTCHours(0, 0, 0, 0)
      return startOfUTCWeek(date, options)
    }

    const year =
      !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
    date.setUTCFullYear(year, 0, options.firstWeekContainsDate)
    date.setUTCHours(0, 0, 0, 0)
    return startOfUTCWeek(date, options)
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
