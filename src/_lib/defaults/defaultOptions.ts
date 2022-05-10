import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'

export type DefaultOptions = LocaleOptions &
  Required<WeekStartOptions> &
  Required<FirstWeekContainsDateOptions>
/*
  TODO:
  RoundingOptions &
  RepresentationOptions &
  FormatISO9075Options &
  FormatRFC3339Options &
  AdditionalDigitsOptions &
  ParseAdditionalTokensOptions &
  FormatDistanceOptions &
  FormatDistanceStrictOptions &
  FormatDurationOptions &
  RoundToNearestMinutesOptions &
  AreIntervalsOverlappingOptions
  */

let defaultOptions: DefaultOptions = {
  weekStartsOn: 0,
  firstWeekContainsDate: 1,
}

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions
}
