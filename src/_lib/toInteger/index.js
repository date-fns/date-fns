export default function toInteger (dirtyNumber) {
  if (dirtyNumber === null) {
    return NaN
  }

  var number = Number(dirtyNumber)

  if (isNaN(number)) {
    return number
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}
