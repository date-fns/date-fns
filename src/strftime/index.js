var dateFormat = require('../format/index.js')

var modifiers = {
  a: 'ddd',
  A: 'dddd',
  b: 'MMM',
  B: 'MMMM',
  d: 'DD',
  D: 'MM/DD/YYYY',
  e: 'D',
  F: 'YYYY-MM-DD',
  g: 'WW',
  h: 'MMM',
  H: 'HH',
  I: 'hh',
  j: 'DDDD',
  k: 'H',
  L: 'SSS',
  l: 'h',
  m: 'MM',
  M: 'mm',
  p: 'A',
  P: 'a',
  r: 'hh:mm:ss A',
  R: 'HH:MM',
  s: 'x',
  S: 'ss',
  T: 'HH:mm:ss',
  u: 'E',
  V: 'WW',
  w: 'd',
  W: 'WW',
  y: 'YY',
  Y: 'YYYY',
  z: 'ZZ',
  Z: 'Z'
}

/**
 * @category Common Helpers
 * @summary Format the date by mapping C style formatters to `format` formatter.
 *
 * @description
 * Format the date by mapping C style formatters to `format` formatter.
 *
 * Accepted formatters:
 * | strftime modifier | format token |
 * |-------------------|--------------|
 * | %a                | ddd          |
 * | %A                | dddd         |
 * | %b                | MMM          |
 * | %B                | MMMM         |
 * | %d                | DD           |
 * | %D                | MM/DD/YYYY   |
 * | %e                | D            |
 * | %F                | YYYY-MM-DD   |
 * | %g                | WW           |
 * | %h                | MMM          |
 * | %H                | HH           |
 * | %I                | hh           |
 * | %j                | DDDD         |
 * | %k                | H            |
 * | %L                | SSS          |
 * | %l                | h            |
 * | %m                | MM           |
 * | %M                | mm           |
 * | %p                | A            |
 * | %P                | a            |
 * | %r                | hh:mm:ss A   |
 * | %R                | HH:MM        |
 * | %s                | x            |
 * | %S                | ss           |
 * | %T                | HH:mm:ss     |
 * | %u                | E            |
 * | %V                | WW           |
 * | %w                | d            |
 * | %W                | WW           |
 * | %y                | YY           |
 * | %Y                | YYYY         |
 * | %z                | ZZ           |
 * | %Z                | z            |
 *
 * All other characters in the string are not changed.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='%FT%T.%L%z'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = strftime(
 *   new Date(2014, 1, 11),
 *   '%m/%d/%Y'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = strftime(
 *   new Date(2014, 6, 2),
 *   '%d de %B %Y',
 *   {locale: eoLocale}
 * )
 * //=> '2 de julio 2014'
 */
function strftime (date, format, options) {
  format = format || '%FT%T.%L%z'
  options = options || {}

  var matcher = new RegExp('(%[' + Object.keys(modifiers).join('') + '])', 'g')

  return format.replace(matcher, function (t) {
    var replacement = modifiers[t[1]]
    return replacement ? dateFormat(date, replacement, options) : t
  })
}

module.exports = strftime
