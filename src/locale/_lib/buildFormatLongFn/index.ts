import { FormatLongFn, FormatLongFnOptions, FormatLongWidth } from '../../types'

export default function buildFormatLongFn(
  args: FormatLongFnOptions
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
