var lookupLocale = require('../../_lib/lookup_translation/index.js')

var translations = {
  MMM: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  MMMM: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  dd: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  ddd: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  dddd: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  A: ['AM', 'PM'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
}

module.exports = {
  getTranslation: lookupLocale(translations),
  translations: translations
}
