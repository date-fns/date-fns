import {Token} from './tokens'
import { AnySignedDigitsParser } from './any-signed-digits-parser'
import type { Flags, Value } from './abstract-parser'

export class MillisecondsTimestampParser extends AnySignedDigitsParser {
  public static readonly TOKEN = Token.T
  public static readonly PRIORITY = 20
  public static readonly INCOMPATIBLE_TOKENS = Token.ASTERISK

  protected constructor() {
    super(
      MillisecondsTimestampParser.TOKEN,
      MillisecondsTimestampParser.PRIORITY,
      MillisecondsTimestampParser.INCOMPATIBLE_TOKENS
    )
  }

  public set(_date: Date, _flags: Flags, value: Value) {
    return {
      date: new Date(value),
      isTimestampSet: true
    }
  }
}
