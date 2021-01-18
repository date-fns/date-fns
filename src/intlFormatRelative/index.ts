type Numeric = 'always' | 'auto'
type Style = 'long' | 'short' | 'narrow'
type LocaleMatcher = 'lookup' | 'best fit'
type Unit =
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

declare namespace Intl {
  class RelativeTimeFormat {
    constructor(locale: string, listFormatOptions: ListFormatOptions)

    format(value: number, unit: Unit): string
  }
}

interface ListFormatOptions {
  style: Style
  numeric: Numeric
  localeMatcher: LocaleMatcher
}

export default function intlFormatRelative(
  value: number,
  unit: Unit,
  locale: string = 'en',
  rtfOptions: ListFormatOptions = {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  }
): string {
  // Create a relative time formatter in your locale
  // with default values explicitly passed in.
  const rtf = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: rtfOptions.localeMatcher,
    numeric: rtfOptions.numeric,
    style: rtfOptions.style,
  })

  return rtf.format(value, unit)
}
