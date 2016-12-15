var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')
var getTranslation = require('./translations/index.js').getTranslation

/**
 * @category Locales
 * @summary Russian locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}
