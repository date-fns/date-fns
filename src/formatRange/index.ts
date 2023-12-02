export interface DateFormat {
  day?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
}

export default function formatRange<DateType extends Date>(
  from: DateType,
  to: DateType,
  format: DateFormat
): string | undefined {
  const defaultFormat: DateFormat = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }
  const mergedFormats: DateFormat = { ...defaultFormat, ...format }

  const fromFormattedParts: Intl.DateTimeFormatPart[] = new Intl.DateTimeFormat(
    undefined,
    mergedFormats
  )
    .formatToParts(from)
    .filter((part) => part.type !== 'literal')
  const toFormattedParts: Intl.DateTimeFormatPart[] = new Intl.DateTimeFormat(
    undefined,
    mergedFormats
  )
    .formatToParts(to)
    .filter((part) => part.type !== 'literal')

  if (fromFormattedParts.length > 3 || toFormattedParts.length > 3) {
    console.error('Unexpected length of formatted parts array.')
    return undefined
  }

  const datePartsType: string[] = fromFormattedParts.map((part) => part.type)

  if (fromFormattedParts === toFormattedParts) {
    return fromFormattedParts.join(' ')
  } else if (
    from.getMonth() === to.getMonth() &&
    from.getFullYear() === to.getFullYear()
  ) {
    let format: string = `${getDatePartValueByType(
      'day',
      fromFormattedParts
    )}-${getDatePartValueByType('day', toFormattedParts)}`
    datePartsType
      .filter((type) => type !== 'day')
      .forEach((type) => {
        format += ` ${getDatePartValueByType(type, fromFormattedParts)}`
      })

    return format
  } else if (from.getFullYear() === to.getFullYear()) {
    const fromFormat: string[] = []
    const toFormat: string[] = []

    datePartsType
      .filter((type) => type !== 'year')
      .forEach((type) => {
        fromFormat.push(getDatePartValueByType(type, fromFormattedParts))
        toFormat.push(getDatePartValueByType(type, toFormattedParts))
      })

    return `${fromFormat.join(' ')}-${toFormat.join(
      ' '
    )} ${getDatePartValueByType('year', fromFormattedParts)}`
  } else {
    const fromFormat: string[] = []
    const toFormat: string[] = []

    datePartsType.forEach((type) => {
      fromFormat.push(getDatePartValueByType(type, fromFormattedParts))
      toFormat.push(getDatePartValueByType(type, toFormattedParts))
    })

    return `${fromFormat.join(' ')}-${toFormat.join(' ')}`
  }
}

function getDatePartValueByType(
  type: string,
  dateParts: Intl.DateTimeFormatPart[]
): string {
  return dateParts.filter((part) => part.type === type)[0].value
}
