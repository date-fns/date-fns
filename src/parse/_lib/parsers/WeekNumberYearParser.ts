import getUTCWeekYear from '../../../_lib/getUTCWeekYear/index'
import startOfUTCWeek from '../../../_lib/startOfUTCWeek/index'
import { AbstractParser } from './AbstractParser'
import { parseNDigits, normalizeTwoDigitYear } from '../utils'
import { Match } from 'src/locale/types'

// Local week-numbering year
export class WeekNumberYearParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = [
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

  parse(string: any, token: any, match: Match, _options: any) {
    const valueCallback = function (year) {
      return {
        year: year,
        isTwoDigitYear: token === 'YY',
      }
    }

    switch (token) {
      case 'Y':
        return parseNDigits(4, string, valueCallback)
      case 'Yo':
        return match.ordinalNumber(string, {
          unit: 'year',
          valueCallback: valueCallback,
        })
      default:
        return parseNDigits(token.length, string, valueCallback)
    }
  }

  validate(_date: any, value: any, _options: any) {
    return value.isTwoDigitYear || value.year > 0
  }

  set(date: any, flags: any, value: any, _options: any) {
    const currentYear = getUTCWeekYear(date, _options)

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      )
      date.setUTCFullYear(
        normalizedTwoDigitYear,
        0,
        _options.firstWeekContainsDate
      )
      date.setUTCHours(0, 0, 0, 0)
      return startOfUTCWeek(date, _options)
    }

    const year =
      !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
    date.setUTCFullYear(year, 0, _options.firstWeekContainsDate)
    date.setUTCHours(0, 0, 0, 0)
    return startOfUTCWeek(date, _options)
  }
}
