/**
 * @name toDuration
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Duration.
 *
 * @description
 * Convert the given argument to an instance of Duration.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @returns {Duration} the parsed duration
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert string '' to duration:
 * var result = toDuration('')
 * //=> {}
 *
 */
export default function toDuration (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  return {}
}
