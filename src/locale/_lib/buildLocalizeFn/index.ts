import { LocaleMatchResult, LocalePatternWidth, LocalizeFn } from '../../types'
import {
  LocalizePeriodValues,
  LocalizePeriodValuesMap,
} from '../../de/_lib/localize'

interface BuildLocalizeFnArgs<Result> {
  values: LocalizePeriodValuesMap<Result>
  defaultWidth: LocalePatternWidth
  formattingValues?: LocalizePeriodValuesMap<Result>
  defaultFormattingWidth?: LocalePatternWidth
  argumentCallback?: (value: number) => Result
}

export default function buildLocalizeFn<Result extends LocaleMatchResult>(
  args: BuildLocalizeFnArgs<Result>
): LocalizeFn<Result> {
  return (dirtyIndex, dirtyOptions) => {
    const options = dirtyOptions || {}

    const context = options.context ? String(options.context) : 'standalone'

    let valuesArray: LocalizePeriodValues<Result>
    if (context === 'formatting' && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth
      const width = (options.width
        ? String(options.width)
        : defaultWidth) as LocalePatternWidth
      valuesArray = (args.formattingValues[width] ||
        args.formattingValues[defaultWidth]) as LocalizePeriodValues<Result>
    } else {
      const defaultWidth = args.defaultWidth
      const width = (options.width
        ? String(options.width)
        : args.defaultWidth) as LocalePatternWidth
      valuesArray = (args.values[width] ||
        args.values[defaultWidth]) as LocalizePeriodValues<Result>
    }
    const index = args.argumentCallback
      ? args.argumentCallback((dirtyIndex as unknown) as number)
      : dirtyIndex
    return valuesArray[index]
  }
}
