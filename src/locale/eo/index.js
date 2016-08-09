var buildDistanceInWordsLocale = require('./build_distance_in_words_locale')
var buildFormatLocale = require('./build_format_locale')

module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
