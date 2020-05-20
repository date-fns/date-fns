export default function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? '-' : ''
  const output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}
