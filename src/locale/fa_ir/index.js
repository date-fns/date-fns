var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Persian locale (Iranian Farsi).
 * @author Naser Mirzaei [@nasermirzaei89]{@link https://github.com/nasermirzaei89}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
