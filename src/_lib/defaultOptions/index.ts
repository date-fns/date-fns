import type {
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  WeekOptions,
} from '../../types'

export type DefaultOptions = LocalizedOptions &
  WeekOptions &
  FirstWeekContainsDateOptions

let defaultOptions: DefaultOptions = {}

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions
}
