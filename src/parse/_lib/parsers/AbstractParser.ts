import { Flags, Match } from 'src/locale/types'
import { ParseOptions, ParseOutput } from '../types'

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
