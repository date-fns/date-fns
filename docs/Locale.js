/**
 * @category Types
 * @summary A locale object.
 *
 * @description
 * A locale object.
 *
 * @typedef {Object} Locale
 *
 * @property {Object} [distanceInWords] - the object used to localize
 *   `distanceInWords` and `distanceInWordsStrict` functions
 * @property {Function} [distanceInWords.localize]
 *
 * @property {Object} [format] - the object used to localize `format` function
 * @property {Object} [format.formatters] - the object with formatter functions
 * @property {RegExp} [format.formattingTokensRegExp] - a RegExp used to split a format string into the token array
 *
 * @property {Object} [parse] - the object used to localize `parse` function
 * @property {Object} [parse.units] - the object with units
 * @property {Object} [parse.parsers] - the object with parsers
 * @property {RegExp} [parse.parsingTokensRegExp] - a RegExp used to split a format string into the token array
 */
var Locale = {}
