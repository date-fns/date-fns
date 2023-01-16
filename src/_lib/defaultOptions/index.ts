import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekOptions,
} from '../../types'

export type DefaultOptions = LocaleOptions &
  WeekOptions &
  FirstWeekContainsDateOptions

let defaultOptions: DefaultOptions = {}

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions
}
