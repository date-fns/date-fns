import { Token } from './tokens'
import { HourParser } from './hour-parser'
import { Flags, Value } from './abstract-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class HourFrom0To11Parser extends HourParser {
  public static readonly RANGE = [0, 11] as const
  public static readonly TOKEN = Token.K
  public static readonly PRIORITY = 70

  protected constructor() {
    super(
      HourFrom0To11Parser.TOKEN,
      HourFrom0To11Parser.PRIORITY,
      HourFrom0To11Parser.RANGE,
      NumericPatternParser.HOUR_11H,
      Token.Ko
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
