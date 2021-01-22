import requiredArgs from '../_lib/requiredArgs/index'

type Locale = Intl.ResolvedDateTimeFormatOptions['locale']
type FormatOptions = Intl.DateTimeFormatOptions
type LocaleOptions = { locale: Locale | Locale[] }

export default function intlFormat(date: Date): string
export default function intlFormat(date: Date, locale: LocaleOptions): string
export default function intlFormat(
  date: Date,
  formatOptions: FormatOptions
): string
export default function intlFormat(
  date: Date,
  formatOptions: FormatOptions,
  locale: LocaleOptions
): string
export default function intlFormat(
  date: Date,
  formatOrLocale?: FormatOptions | LocaleOptions,
  localeOptions?: LocaleOptions
) {
  requiredArgs(1, arguments)

  let formatOptions: FormatOptions | undefined

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale
  } else {
    assertIsUndefined(
      localeOptions,
      new TypeError("Can't provide 2 locales for the function")
    )
    localeOptions = formatOrLocale
  }

  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(
    date
  )
}

function isFormatOptions(
  opts: LocaleOptions | FormatOptions | undefined
): opts is FormatOptions {
  return opts !== undefined && !('locale' in opts)
}

function assertIsUndefined(opts: unknown, error: Error) {
  if (opts !== undefined) {
    throw error
  }
}
