import { LocaleOptions, Locale, Match } from 'src/locale/types'

type ParseOptions = Locale & LocaleOptions
type ParseOutput =
  | number
  | null
  | string
  | {
      value: string
      rest: unknown
    }

export abstract class AbstractParser {
  public readonly incompatibleTokens: string | string[] = []

  constructor(public readonly priority: number) {
    this.priority = priority
  }

  abstract parse(
    str: string,
    token: string,
    match: Match,
    _options: ParseOptions
  ): ParseOutput
  abstract set(date: any, flags: any, value: any, _options: ParseOptions): any
}
