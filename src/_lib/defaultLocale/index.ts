import type { Locale } from '../../locale/types'

export let _defaultLocale: Locale | undefined = undefined

export function setDefaultLocale(newLocale: Locale | undefined): void {
  _defaultLocale = newLocale
}
