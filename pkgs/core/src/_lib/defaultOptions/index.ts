import type {
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  WeekOptions,
} from "../../types.ts";
import type { Locale } from "../../locale/types.ts";

export type DefaultOptions = LocalizedOptions<keyof Locale> &
  WeekOptions &
  FirstWeekContainsDateOptions;

let defaultOptions: DefaultOptions = {};

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions;
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions;
}
