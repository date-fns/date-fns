import startOfUTCWeek from '../startOfUTCWeek/index.js'
import requiredArgs from '../requiredArgs/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function isSameUTCWeek(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  options
): boolean {
  const dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options)
  const dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
