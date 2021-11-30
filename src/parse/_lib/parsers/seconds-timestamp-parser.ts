import { Time } from './time-constants'
import { Token } from './tokens'
import { AnySignedDigitsParser } from './any-signed-digits-parser'
import type { Flags, Value } from './abstract-parser'

export class SecondsTimestampParser extends AnySignedDigitsParser {
  public static readonly TOKEN = Token.t
  public static readonly PRIORITY = 40
  public static readonly INCOMPATIBLE_TOKENS = Token.ASTERISK

  protected constructor() {
    super(
      SecondsTimestampParser.TOKEN,
      SecondsTimestampParser.PRIORITY,
      SecondsTimestampParser.INCOMPATIBLE_TOKENS
    )
  }

  public set(_date: Date, _flags: Flags, value: Value) {
    return {
      date: new Date(value * Time.MILLISECONDS_IN_SECOND),
      isTimestampSet: true,
    }
  }
}
