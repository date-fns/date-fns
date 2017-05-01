import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Croatian locale.
 * @language Croatian
 * @iso-639-2 hrv
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
var hrLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default hrLocale
