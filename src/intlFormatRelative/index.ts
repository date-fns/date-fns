export default function intlFormatRelative(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: Intl.BCP47LanguageTag = 'en',
  rtfOptions: Intl.RelativeTimeFormatOptions = {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  }
) {
  // Create a relative time formatter in your locale
  // with default values explicitly passed in.
  const rtf = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: rtfOptions.localeMatcher,
    numeric: rtfOptions.numeric,
    style: rtfOptions.style,
  })

  return rtf.format(value, unit)
}
