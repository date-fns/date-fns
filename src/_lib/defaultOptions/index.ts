import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
  StepOptions,
  RoundingOptions,
  RepresentationOptions,
  FormatOptions,
  FormatRFC3339Options,
  AdditionalDigitsOptions,
  AdditionalTokensOptions,
  FormatDistanceOptions,
  FormatDistanceStrictOptions,
  FormatDurationOptions,
  RoundToNearestMinutesOptions,
  AreIntervalsOverlappingOptions,
} from '../../types'

export type AllOptions = LocaleOptions &
  WeekStartOptions &
  FirstWeekContainsDateOptions &
  StepOptions &
  RoundingOptions &
  RepresentationOptions &
  Omit<FormatDurationOptions, 'format'> & {
    format?: FormatOptions['format'] | FormatDurationOptions['format']
  } & FormatRFC3339Options &
  AdditionalDigitsOptions &
  AdditionalTokensOptions &
  FormatDistanceOptions &
  FormatDistanceStrictOptions &
  RoundToNearestMinutesOptions &
  AreIntervalsOverlappingOptions

export let _defaultOptions: AllOptions = {}

export function setDefaultOptions(newOptions: AllOptions): void {
  _defaultOptions = newOptions
}
