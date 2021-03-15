import { LocaleOptions, Locale, Match } from 'src/locale/types'

type ParseOptions = Locale & LocaleOptions

export abstract class AbstractParser {
  public readonly incompatibleTokens: string[] = []

  constructor(public readonly priority: number) {
    this.priority = priority
  }

  abstract parse(
    str: string,
    token: string,
    match: Match,
    _options: ParseOptions
  ): any
  abstract set(date: any, flags: any, value: any, _options: ParseOptions): any
}
