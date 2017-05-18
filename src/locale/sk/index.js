import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Slovak locale.
 * @language Slovak
 * @iso-639-2 slk
 * @author Marek Suscak [@mareksuscak]{@link https://github.com/mareksuscak}
 */
var skLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default skLocale
