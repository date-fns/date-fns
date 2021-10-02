import { LocaleOptions, Locale } from 'src/locale/types'

export type ParseOptions = Locale & LocaleOptions
export type ParseOutput =
  | number
  | null
  | {
      value: unknown
      rest: unknown
    }
