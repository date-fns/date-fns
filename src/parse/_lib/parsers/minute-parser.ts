import { Token } from './tokens'
import { Flags, Value } from './abstract-parser'
import { NDigitsParser } from './n-digits-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class MinutesParser extends NDigitsParser {
  public static readonly TOKEN = Token.m
  public static readonly PRIORITY = 60
  public static readonly INCOMPATIBLE_TOKENS = [Token.t, Token.T]
  protected constructor() {
    super(
      MinutesParser.TOKEN,
      MinutesParser.PRIORITY,
      MinutesParser.INCOMPATIBLE_TOKENS
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    date.setUTCMinutes(value, 0, 0)
    return { date }
  }

  public isValidResult(_date: Date, value: Value) {
    return value >= 0 && value <= 59
  }

  public parse(string: string, token: Token, match: any) {
    switch (token) {
      case Token.m:
        return this.parseWithPattern(NumericPatternParser.MINUTE, string)
      case Token.mo:
        return match.ordinalNumber(string, { unit: 'minute' })
      default:
        return this.parseNDigits(token.length, string)
    }
  }
}
