import { FormatLongFn, FormatLongWidth } from '../../types'

export interface BuildFormatLongFnArgs {
  formats: { [format in FormatLongWidth]: string }
  defaultWidth: FormatLongWidth
}

export default function buildFormatLongFn(
  args: BuildFormatLongFnArgs
): FormatLongFn {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width
      ? (String(options.width) as FormatLongWidth)
      : args.defaultWidth
    const format = args.formats[width] || args.formats[args.defaultWidth]
    return format
  }
}
