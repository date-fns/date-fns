import { NumericPatternParser } from './numeric-pattern-parser'

export abstract class AnySignedDigitsParser extends NumericPatternParser {
  protected constructor(
    token: string,
    priority: number = 0,
    incompatibleTokens?: string
  ) {
    super(
      NumericPatternParser.ANY_SIGNED_DIGIT,
      token,
      priority,
      incompatibleTokens
    )
  }
}
