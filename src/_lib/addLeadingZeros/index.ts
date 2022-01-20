export default function addLeadingZeros(
  number: number,
  targetLength: number
): string {
  const sign = number < 0 ? '-' : ''
  let output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}
