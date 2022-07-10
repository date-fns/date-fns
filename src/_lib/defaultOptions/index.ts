import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'

export type DefaultOptions = LocaleOptions &
  WeekStartOptions &
  FirstWeekContainsDateOptions

let defaultOptions: DefaultOptions = {}

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions
}
