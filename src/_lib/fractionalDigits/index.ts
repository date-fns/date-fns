import addLeadingZeros from '../addLeadingZeros'

export default function fractionDigits(
  fractionDigits: number,
  originalDate: Date
): string {
  let fractionalSecond = ''
  if (fractionDigits > 0) {
    const milliseconds = originalDate.getMilliseconds()
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, fractionDigits - 3)
    )
    fractionalSecond = '.' + addLeadingZeros(fractionalSeconds, fractionDigits)
  }
  return fractionalSecond
}
