import { Token } from './tokens'
import { HourParser } from './hour-parser'
import { Flags, Value } from './abstract-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class HourFrom1To24Parser extends HourParser {
  public static readonly RANGE = [1, 24] as const
  public static readonly TOKEN = Token.k
  public static readonly PRIORITY = 70

  protected constructor() {
    super(
      HourFrom1To24Parser.TOKEN,
      HourFrom1To24Parser.PRIORITY,
      HourFrom1To24Parser.RANGE,
      NumericPatternParser.HOUR_24H,
      Token.Ko
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    const hours = value <= 24 ? value % 24 : value
    date.setUTCHours(hours, 0, 0, 0)
    return { date }
  }
}
