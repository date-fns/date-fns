export default function toInteger<T extends unknown>(
  dirtyNumber: T
): T extends number ? T : number {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN as T extends number ? T : number
  }

  const number = Number(dirtyNumber)

  if (isNaN(number)) {
    return number as T extends number ? T : number
  }

  return (number < 0
    ? Math.ceil(number)
    : Math.floor(number)) as T extends number ? T : number
}
