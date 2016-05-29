var buildDistanceInWordsLocalizeFn = require('./build_distance_in_words_localize_fn')
var buildFormatFormatters = require('./build_format_formatters')

module.exports = {
  distanceInWords: buildDistanceInWordsLocalizeFn(),
  format: buildFormatFormatters()
}
