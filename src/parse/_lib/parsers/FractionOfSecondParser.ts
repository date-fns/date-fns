import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { mapValue, parseNDigits } from '../utils'

export class FractionOfSecondParser extends Parser<number> {
  priority = 30

  parse(dateString: string, token: string): ParseResult<number> {
    const valueCallback = (value: number) =>
      Math.floor(value * Math.pow(10, -token.length + 3))
    return mapValue(parseNDigits(token.length, dateString), valueCallback)
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    date.setUTCMilliseconds(value)
    return date
  }

  incompatibleTokens = ['t', 'T']
}
