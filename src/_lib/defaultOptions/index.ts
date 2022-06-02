import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
  StepOptions,
  RoundingOptions,
  RepresentationOptions,
  FormatISO9075Options,
  FormatRFC3339Options,
  AdditionalDigitsOptions,
  ParseAdditionalTokensOptions,
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
  FormatISO9075Options &
  FormatRFC3339Options &
  AdditionalDigitsOptions &
  ParseAdditionalTokensOptions &
  FormatDistanceOptions &
  FormatDistanceStrictOptions &
  FormatDurationOptions &
  RoundToNearestMinutesOptions &
  AreIntervalsOverlappingOptions

export let _defaultOptions: AllOptions = {}

export function setDefaultOptions(newOptions: AllOptions): void {
  _defaultOptions = newOptions
}
