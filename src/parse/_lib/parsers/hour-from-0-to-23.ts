import { Token } from './tokens'
import { HourParser } from './hour-parser'
import { Flags, Value } from './abstract-parser'
import { NumericPatternParser } from './numeric-pattern-parser'

export class HourFrom0To23Parser extends HourParser {
  public static readonly RANGE = [0, 23] as const
  public static readonly TOKEN = Token.H
  public static readonly PRIORITY = 70

  protected constructor() {
    super(
      HourFrom0To23Parser.TOKEN,
      HourFrom0To23Parser.PRIORITY,
      HourFrom0To23Parser.RANGE,
      NumericPatternParser.HOUR_23H,
      Token.Ho
    )
  }

  public set(date: Date, _flags: Flags, value: Value) {
    date.setUTCHours(value, 0, 0, 0)
    return { date }
  }
}
