export default function trunc(number: number) {
  return number < 0 ? Math.ceil(number) : Math.floor(number)
}
