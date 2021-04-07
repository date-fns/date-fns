import { AbstractParser } from './AbstractParser'
import { Match } from 'src/locale/types'

export class EraParser extends AbstractParser {
  public readonly incompatibleTokens: string[] = ['R', 'u', 't', 'T']

  parse(string: any, token: any, match: Match, _options: any) {
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return (
          match.era(string, { width: 'abbreviated' }) ||
          match.era(string, { width: 'narrow' })
        )
      // A, B
      case 'GGGGG':
        return match.era(string, { width: 'narrow' })
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return (
          match.era(string, { width: 'wide' }) ||
          match.era(string, { width: 'abbreviated' }) ||
          match.era(string, { width: 'narrow' })
        )
    }
  }

  set(date: any, flags: any, value: any, _options: any) {
    flags.era = value
    date.setUTCFullYear(value, 0, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}
