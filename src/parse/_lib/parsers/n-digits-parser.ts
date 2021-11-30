import { Token } from './tokens'
import { NumericPatternParser } from './numeric-pattern-parser'

export abstract class NDigitsParser extends NumericPatternParser {
  protected constructor(
    token: Token,
    priority?: number,
    incompatibleTokens?: Token | Token[]
  ) {
    super(new RegExp(''), token, priority, incompatibleTokens)
  }

  public parseNDigits(n: number, string: string, valueCallback?: Function) {
    switch (n) {
      case 1:
        return this.parseSingleDigit(string, valueCallback)
      case 2:
        return this.parseTwoDigit(string, valueCallback)
      case 3:
        return this.parseThreeDigit(string, valueCallback)
      case 4:
        return this.parseFourDigit(string, valueCallback)
      default:
        const nDigitsPattern = new RegExp('^\\d{1,' + n + '}')
        return this.parseWithPattern(nDigitsPattern, string, valueCallback)
    }
  }

  public parseSingleDigit(string: string, valueCallback?: Function) {
    return this.parseWithPattern(
      NumericPatternParser.SINGLE_DIGIT,
      string,
      valueCallback
    )
  }

  public parseTwoDigit(string: string, valueCallback?: Function) {
    return this.parseWithPattern(
      NumericPatternParser.TWO_DIGITS,
      string,
      valueCallback
    )
  }

  public parseThreeDigit(string: string, valueCallback?: Function) {
    return this.parseWithPattern(
      NumericPatternParser.THREE_DIGITS,
      string,
      valueCallback
    )
  }

  public parseFourDigit(string: string, valueCallback?: Function) {
    return this.parseWithPattern(
      NumericPatternParser.FOUR_DIGITS,
      string,
      valueCallback
    )
  }
}
