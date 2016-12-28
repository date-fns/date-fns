var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  MMMM: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  dd: ['nd.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.'],
  ddd: ['ndz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  dddd: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  A: ['w nocy', 'rano', 'po południu', 'wieczorem']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
