var buildDistanceInWordsTranslateFn = require('./build_distance_in_words_translate_fn')
var buildFormatFormatters = require('./build_format_formatters')

module.exports = {
  distanceInWords: buildDistanceInWordsTranslateFn(),
  format: buildFormatFormatters()
}
