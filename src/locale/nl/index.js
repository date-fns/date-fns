import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Dutch locale.
 * @language Dutch
 * @iso-639-2 nld
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 */
var nlLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default nlLocale
