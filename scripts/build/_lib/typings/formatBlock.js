const flowHeader = '// @flow'
const generatedAutomaticallyMessage = "// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it."

const id = x => x

const trimLeft = string =>
  string.replace(/^\s*/, '')

const trimRight = string =>
  string.replace(/\s*$/, '')

const removeIndent = (string, indent) => {
  return trimLeft(string.slice(0, indent)) + string.slice(indent)
}

const addIndent = (string, indent) =>
  string.length > 0
    ? ' '.repeat(indent) + string
    : string

const detectIndent = (string) => {
  const matchResult = string.match(/^\n*(\s+)/)
  const indent = matchResult
    ? matchResult[1].length
    : 0
  return indent
}

const addIndentToMultilineString = (string, indent, ignoreFirstLine) =>
  string
    .split('\n')
    .map((line, index) =>
      (ignoreFirstLine && index === 0)
        ? line
        : addIndent(line, indent)
    )
    .join('\n')

const addIndentToArray = (array, indent, ignoreFirstElement) =>
  array
    .map((element, index) =>
      addIndentToMultilineString(element, indent, ignoreFirstElement && index === 0)
    )

const removeIndentFromArray = (array, indent, ignoreFirstElement) =>
  array
    .map((element, index) =>
      (ignoreFirstElement && index === 0)
        ? element
        : removeIndent(element, indent)
    )

/**
 * Add a specified separator to the end of every string in the array, except the last one
 * @param {String[]} stringsArray
 * @returns {String[]} stringsArray with added separators
 */
const addSeparator = (stringsArray, separator) =>
  stringsArray.map((string, index) =>
    index === stringsArray.length - 1
      ? string
      : string + separator
  )

/**
 * Tag function that formats a code block by putting correct indentation to it
 * @param {String[]} rawStrings
 * @param {...String} substitutions
 * @returns {String} formatted code block
 *
 * @example
 * formatBlock`
 *   while (true) {
 *     ${addSeparator(
 *       ['Hello', 'world', '!'].map(s => `console.log('${s}')`),
 *       ';'
 *     )}
 *   }
 * `
 * //=>
 * while (true) {
 *   console.log('Hello');
 *   console.log('world');
 *   console.log('!')
 * }
 */
const formatBlock = (rawStrings, ...substitutions) => {
  const firstLineIndent = detectIndent(rawStrings[0])
  let lastLineIndent = 0

  const result = [...substitutions, ''].map((substitution, index) => {
    const rawString = rawStrings[index]

    // Trim left if it is the first string, and right if it is the last string
    const maybeTrimLeft = index === 0 ? trimLeft : id
    const maybeTrimRight = index === substitutions.length ? trimRight : id
    const string = maybeTrimLeft(maybeTrimRight(rawString))

    const lines = removeIndentFromArray(string.split('\n'), firstLineIndent, true)

    if (lines.length > 1) {
      const lastLine = lines[lines.length - 1]
      lastLineIndent = detectIndent(lastLine)
    }

    const indentedSubstitution =
      Array.isArray(substitution)
        ? addIndentToArray(substitution, lastLineIndent, true).join('\n')
        : addIndentToMultilineString(substitution, lastLineIndent, true)

    return lines.join('\n') + indentedSubstitution
  }).join('')

  return result
}

/**
 * Tag function that formats a Flow file by putting the correct indentation, header and footer to it
 * @param {String[]} rawStrings
 * @param {...String} substitutions
 * @returns {String} formatted file content
 */
const formatFlowFile = (...args) =>
  flowHeader +
    '\n' +
    generatedAutomaticallyMessage +
    '\n\n' +
    formatBlock(...args) +
    '\n'

/**
 * Tag function that formats a TypeScript file by putting the correct indentation, header and footer to it
 * @param {String[]} rawStrings
 * @param {...String} substitutions
 * @returns {String} formatted file content
 */
const formatTypeScriptFile = (...args) =>
  generatedAutomaticallyMessage +
    '\n\n' +
    formatBlock(...args) +
    '\n'

const getTypeScriptFPInterfaces = (arity = 4) => [
  formatBlock`
    interface CurriedFn1<A, R> {
      <A>(a: A): R
    }
  `,

  formatBlock`
    interface CurriedFn2<A, B, R> {
      <A>(a: A): CurriedFn1<B, R>
      <A, B>(a: A, b: B): R
    }
  `,

  formatBlock`
    interface CurriedFn3<A, B, C, R> {
      <A>(a: A): CurriedFn2<B, C, R>
      <A,B>(a: A, b: B): CurriedFn1<C, R>
      <A,B,C>(a: A, b: B, c: C): R
    }
  `,

  formatBlock`
    interface CurriedFn4<A, B, C, D, R> {
      <A>(a: A): CurriedFn3<B, C, D, R>
      <A,B>(a: A, b: B): CurriedFn2<C, D, R>
      <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>
      <A,B,C,D>(a: A, b: B, c: C, d: D): R
    }
  `
].slice(0, arity)

module.exports = {
  addSeparator,
  formatBlock,
  formatFlowFile,
  formatTypeScriptFile
}
