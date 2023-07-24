/* eslint-disable no-unused-vars */

import type {
  LocaleUnitValue,
  LocaleWidth,
  LocalizeFn,
  LocalizeFnArgCallback,
  LocalizePeriodValuesMap,
  LocalizeUnitIndex,
  LocalizeValues,
} from '../../types'

export type BuildLocalizeFnArgs<
  Value extends LocaleUnitValue,
  ArgCallback extends LocalizeFnArgCallback<Value> | undefined
> = {
  values: LocalizePeriodValuesMap<Value>
  defaultWidth: LocaleWidth
  formattingValues?: LocalizePeriodValuesMap<Value>
  defaultFormattingWidth?: LocaleWidth
} & (ArgCallback extends undefined
  ? { argumentCallback?: undefined }
  : { argumentCallback: LocalizeFnArgCallback<Value> })

export default function buildLocalizeFn<
  Value extends LocaleUnitValue,
  ArgCallback extends LocalizeFnArgCallback<Value> | undefined
>(args: BuildLocalizeFnArgs<Value, ArgCallback>): LocalizeFn<Value> {
  return (value, options) => {
    const context = options?.context ? String(options.context) : 'standalone'

    let valuesArray: LocalizeValues<Value>
    if (context === 'formatting' && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth
      const width = (options?.width
        ? String(options.width)
        : defaultWidth) as LocaleWidth
      valuesArray = (args.formattingValues[width] ||
        args.formattingValues[defaultWidth]) as LocalizeValues<Value>
    } else {
      const defaultWidth = args.defaultWidth
      const width = (options?.width
        ? String(options.width)
        : args.defaultWidth) as LocaleWidth
      valuesArray = (args.values[width] ||
        args.values[defaultWidth]) as LocalizeValues<Value>
    }
    const index = (args.argumentCallback
      ? args.argumentCallback(value as Value)
      : value) as LocalizeUnitIndex<Value>
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index]
  }
}
