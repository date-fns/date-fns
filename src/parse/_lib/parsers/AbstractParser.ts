import { LocaleOptions, Flags, Locale, Match } from 'src/locale/types'

type ParseOptions = Locale & LocaleOptions
type ParseOutput =
  | number
  | null
  | {
      value: unknown
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
  abstract set(
    date: Date,
    flags: Flags,
    value: unknown,
    _options: ParseOptions
  ): Date | [Date, Flags]
}
