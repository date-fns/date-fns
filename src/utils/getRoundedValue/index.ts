export default function getRoundedValue(value: number): number {
  if (value > 0) {
    return Math.floor(value)
  } else {
    const result = Math.ceil(value)
    return Object.is(result, -0) ? 0 : result
  }
}
