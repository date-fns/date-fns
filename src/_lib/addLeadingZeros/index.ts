export default function addLeadingZeros(value: number, targetLength: number): string {
  var sign = value < 0 ? '-' : ''
  var output = Math.abs(value).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}
