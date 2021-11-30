import { Token } from './tokens'
import { HourParser } from './hour-parser'
import { Flags, Value } from './abstract-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class HourFrom1To12Parser extends HourParser {
  public static readonly RANGE = [1, 12] as const
  public static readonly TOKEN = Token.h
  public static readonly PRIORITY = 70
  public static readonly INCOMPATIBLE_TOKENS = [
    Token.H,
    Token.K,
    Token.k,
    Token.t,
    Token.T,
  ]

  protected constructor() {
    super(
      HourFrom1To12Parser.TOKEN,
      HourFrom1To12Parser.PRIORITY,
      HourFrom1To12Parser.RANGE,
      NumericPatternParser.HOUR_11H,
      Token.Ho,
      HourFrom1To12Parser.INCOMPATIBLE_TOKENS
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    const isPM = date.getUTCHours() >= 12
    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0)
    } else {
      date.setUTCHours(value, 0, 0, 0)
    }
    return { date }
  }
}
